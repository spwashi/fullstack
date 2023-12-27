"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = void 0;
const mainRootRoute = {
    id: "root",
    href: "/",
    absolutePath: "/*",
    subConfigMap: {},
};
const mainHomeRoute = {
    id: "home",
    href: "/",
    title: "Home",
    absolutePath: "/",
    subConfigMap: {},
};
const mainAboutRoute = {
    id: "about",
    href: "/about",
    title: "About",
    absolutePath: "about",
    subConfigMap: {},
};
exports.mainRoutes = {
    root: mainRootRoute,
    home: mainHomeRoute,
    about: mainAboutRoute,
};
