"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const routerCategories_1 = require("../helpers/routerCategories");
const adminPrefix = routerCategories_1.routerCategories.admin.prefix;
const adminRootRoute = {
    href: `${adminPrefix}/`,
    id: "admin-root",
    title: "Root",
    absolutePath: "admin/*",
    subConfigMap: {},
};
const adminAllRoute = {
    href: `${adminPrefix}/all/`,
    id: "admin-all",
    title: "All",
    absolutePath: "all/*",
    subConfigMap: {},
};
const adminAssetsRoute = {
    href: `${adminPrefix}/assets/`,
    id: "admin-assets",
    title: "Assets",
    absolutePath: "assets/*",
    subConfigMap: {
        root: {
            id: "admin-assets-root",
            href: `${adminPrefix}/assets/`,
            title: "Asset Administration",
            absolutePath: "/",
            relativePath: "../assets",
            subConfigMap: {},
        },
        all: {
            id: "admin-assets-all",
            href: `${adminPrefix}/assets/all/`,
            title: "Asset List of All",
            absolutePath: "all",
            relativePath: "../assets/all",
            subConfigMap: {},
        },
    },
};
const adminConceptsRoute = {
    href: `${adminPrefix}/concepts/`,
    id: "admin-concepts",
    title: "Concepts",
    absolutePath: "concepts/*",
    subConfigMap: {
        root: {
            id: "admin-concepts-root",
            href: `${adminPrefix}/concepts/`,
            title: "Concept Administration",
            absolutePath: "/",
            relativePath: "../concepts",
            subConfigMap: {},
        },
        all: {
            id: "admin-concepts-all",
            href: `${adminPrefix}/concepts/all/`,
            title: "Concept List of All",
            absolutePath: "all",
            relativePath: "../concepts/all",
            subConfigMap: {},
        },
    },
};
const adminEventsRoute = {
    href: `${adminPrefix}/events/`,
    id: "admin-events",
    title: "Events",
    absolutePath: "events/*",
    subConfigMap: {
        root: {
            id: "admin-events-root",
            href: `${adminPrefix}/events/`,
            title: "Event Administration",
            absolutePath: "/",
            relativePath: "../events",
            subConfigMap: {},
        },
        all: {
            id: "admin-events-all",
            href: `${adminPrefix}/events/all/`,
            title: "Event List of All",
            absolutePath: "all",
            relativePath: "../events/all",
            subConfigMap: {},
        },
    },
};
const adminProjectsRoute = {
    href: `${adminPrefix}/projects/`,
    id: "admin-projects",
    title: "Projects",
    absolutePath: "projects/*",
    subConfigMap: {
        root: {
            id: "admin-projects-root",
            href: `${adminPrefix}/projects/`,
            title: "Project Administration",
            absolutePath: "/",
            relativePath: "../projects",
            subConfigMap: {},
        },
        all: {
            id: "admin-projects-all",
            href: `${adminPrefix}/projects/all/`,
            title: "Project List of All",
            absolutePath: "all",
            relativePath: "../projects/all",
            subConfigMap: {},
        },
    },
};
const adminScenesRoute = {
    href: `${adminPrefix}/scenes/`,
    id: "admin-scenes",
    title: "Scenes",
    absolutePath: "scenes/*",
    subConfigMap: {
        root: {
            id: "admin-scenes-root",
            href: `${adminPrefix}/scenes/`,
            title: "Scene Administration",
            absolutePath: "/",
            relativePath: "../scenes",
            subConfigMap: {},
        },
        all: {
            id: "admin-scenes-all",
            href: `${adminPrefix}/scenes/all/`,
            title: "Scene List of All",
            absolutePath: "all",
            relativePath: "../scenes/all",
            subConfigMap: {},
        },
    },
};
const adminTagsRoute = {
    href: `${adminPrefix}/tags/`,
    id: "admin-tags",
    title: "Tags",
    absolutePath: "tags/*",
    subConfigMap: {
        root: {
            id: "admin-tags-root",
            href: `${adminPrefix}/tags/`,
            title: "Tag Administration",
            absolutePath: "/",
            relativePath: "../tags",
            subConfigMap: {},
        },
        all: {
            id: "admin-tags-all",
            href: `${adminPrefix}/tags/all/`,
            title: "Tag List of All",
            absolutePath: "all",
            relativePath: "../tags/all",
            subConfigMap: {},
        },
    },
};
const adminUsersRoute = {
    href: `${adminPrefix}/users/`,
    id: "admin-users",
    title: "Users",
    absolutePath: "users/*",
    subConfigMap: {
        root: {
            id: "admin-users-root",
            href: `${adminPrefix}/users/`,
            title: "User Administration",
            absolutePath: "/",
            relativePath: "../users",
            subConfigMap: {},
        },
        all: {
            id: "admin-users-all",
            href: `${adminPrefix}/users/all/`,
            title: "User List of All",
            absolutePath: "all",
            relativePath: "../users/all",
            subConfigMap: {},
        },
    },
};
exports.adminRoutes = {
    all: adminAllRoute,
    root: adminRootRoute,
    assets: adminAssetsRoute,
    concepts: adminConceptsRoute,
    events: adminEventsRoute,
    projects: adminProjectsRoute,
    scenes: adminScenesRoute,
    tags: adminTagsRoute,
    users: adminUsersRoute,
};
