use warp::Filter;
use image::{ImageBuffer, Rgba, DynamicImage};

#[tokio::main]
async fn main() {
    // Route to serve the square PNG
    let square_route = warp::path!("image" / u32)
            .map(|size: u32| {
                let img = create_square_image(size);
                let dynamic_image = DynamicImage::ImageRgba8(img);
                let mut buffer = Vec::new();
                dynamic_image.write_to(&mut buffer, image::ImageOutputFormat::Png)
                             .unwrap();
                warp::http::Response::builder()
                    .header("Content-Type", "image/png")
                    .body(buffer)
                    .unwrap()
            });

    warp::serve(square_route)
    .tls()
    .cert_path("/Users/samwashington/repos/apps/_/certs/site.dev+1.pem")
    .key_path("/Users/samwashington/repos/apps/_/certs/site.dev+1-key.pem")
        .run(([0, 0, 0, 0], 443))
        .await;
}

// Function to create a square PNG image of a specified size
fn create_square_image(size: u32) -> ImageBuffer<Rgba<u8>, Vec<u8>> {
    let mut image_buffer = ImageBuffer::from_pixel(size, size, Rgba([0, 0, 0, 0]));

    let mut i = 0;
    image_buffer.enumerate_pixels_mut()
    .for_each(|(x, y, pixel)| {
        i += 1;
        pixel[0] = 255 * (i / size * size) as u8;
        pixel[1] = (i as f64).sqrt() as u8;
        pixel[2] = 255 * (i / size * size) as u8;
        pixel[3] = 255;
        if (x + y) % 13 == 0 {
            pixel[0] = x as u8;
            pixel[1] = y as u8;
            pixel[2] = (x + y) as u8;
            return;
        }
    });
    return image_buffer;
}

