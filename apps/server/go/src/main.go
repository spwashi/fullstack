package main

import (
	"errors"
	"fmt"
	"github.com/gorilla/mux"
	"image"
	"image/color"
	"image/png"
	"io"
	"math"
	"net/http"
	"os"
	"strconv"
)

func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / request\n")
	writeString, err := io.WriteString(w, "")
	_, err = io.WriteString(w, "boon\n")
	_, err = io.WriteString(w, "bane\n")
	_, err = io.WriteString(w, "bone\n")
	_, err = io.WriteString(w, "bonk\n")
	_, err = io.WriteString(w, "honk\n")
	fmt.Printf("wrote %d bytes\n", writeString)
	if err != nil {
		return
	}
}

var imageCache = make(map[string]*image.RGBA)

func SimpleImage(width int, height int, modulus int) *image.RGBA {
	key := fmt.Sprintf("%d-%d-%d", width, height, modulus)
	if imageCache[key] != nil {
		return imageCache[key]
	}
	// generate an image
	img := image.NewRGBA(image.Rect(
		0,
		0,
		width,
		height,
	))

	digit := modulus
	if digit == 0 {
		digit = modulus
	}

	// fill the image with a color
	i := 0
	for x := 0; x < width; x++ {
		for y := 0; y < height; y++ {
			i += 1
			if x == digit {
				img.Set(x, y, color.RGBA{255, 255, 255, 255})
				continue
			}
			if (x+y)%digit == 0 {
				img.Set(x, y, color.RGBA{uint8(x), uint8(y), uint8(x + y), 255})
				continue
			}
			pixelColor := color.RGBA{
				uint8(i / (width * height)),
				uint8(math.Sqrt(float64(x))),
				uint8(i / (width * height)),
				255,
			}
			img.Set(x, y, pixelColor)
		}
	}
	imageCache[key] = img
	return img
}

func getImage(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	widthString := vars["width"]
	width, widthError := strconv.Atoi(widthString)
	if widthError != nil {
		width = 1000
	}

	heightString := vars["height"]
	height, heightError := strconv.Atoi(heightString)
	if heightError != nil {
		height = width
	}

	mod := vars["mod"]
	modulus, modulusError := strconv.Atoi(mod)
	if modulusError != nil {
		modulus = 13
	}

	// convert the size to an int
	fmt.Printf("got /image request\n")

	img := SimpleImage(width, height, modulus)
	err := png.Encode(w, img)

	if err != nil {
		return
	}
}

func main() {
	r := mux.NewRouter()
	s := r.PathPrefix("/image/").Subrouter()
	s.HandleFunc("/", getRoot)
	s.HandleFunc("/{width}", getImage)
	s.HandleFunc("/{width}/{height}", getImage)
	s.HandleFunc("/{width}/{height}/{mod}", getImage)
	http.Handle("/", r)
	err := http.ListenAndServe(":3030", nil)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)
	}
}
