"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forumRoutes = void 0;
const routerCategories_1 = require("../helpers/routerCategories");
const forumPrefix = routerCategories_1.routerCategories.forum.prefix;
const forumRootRoute = {
    href: `/${forumPrefix}/`,
    id: "forum-root",
    absolutePath: `/${forumPrefix}/*`,
    subConfigMap: {},
};
const forumPostsRoute = {
    href: `/${forumPrefix}/posts/`,
    id: "forum-posts",
    title: "Posts",
    absolutePath: `/${forumPrefix}/posts/*`,
    relativePath: `posts/*`,
    subConfigMap: {},
};
const forumCommentsRoute = {
    href: `/${forumPrefix}/comments/`,
    id: "forum-comments",
    title: "Comments",
    absolutePath: `/${forumPrefix}/comments/*`,
    relativePath: `comments/*`,
    subConfigMap: {},
};
const forumDirectCommentRoute = {
    href: `/${forumPrefix}/comments/{id}`,
    id: "forum-direct_comment",
    absolutePath: `/${forumPrefix}/comments/:id`,
    relativePath: ":id",
    subConfigMap: {},
    buildPath(relative, id) {
        if (!id)
            return `${relative ? this.relativePath : this.absolutePath}`;
        return (relative ? "" : "/") + `/${forumPrefix}/comments/${id}`;
    },
};
const forumPostCommentRoute = {
    href: `/${forumPrefix}/posts/{slug}/comments/{id}`,
    id: "forum-post_comment",
    absolutePath: `/${forumPrefix}/posts/:slug/:username/comments/:id`,
    relativePath: "comments/:id",
    subConfigMap: {},
    buildPath(relative, post, comment) {
        if (!post || !comment) {
            return `${relative ? this.relativePath : this.absolutePath}`;
        }
        return ((relative ? "" : "/") +
            `${forumPrefix}/posts/${post.slug}/comments/${comment.id}`);
    },
};
const forumDirectPostRoute = {
    href: `/${forumPrefix}/posts/{slug}`,
    id: "forum-direct_post",
    absolutePath: `/${forumPrefix}/posts/:slug/:username/*`,
    relativePath: ":slug/:username/*",
    subConfigMap: {},
    buildPath(relative, slug) {
        if (!slug)
            return `${relative ? this.relativePath : this.absolutePath}`;
        return (relative ? "" : "/") + `${forumPrefix}/posts/${slug}`;
    },
};
const forumUsersRoute = {
    href: `/${forumPrefix}/users/`,
    id: "forum-users",
    title: "Users",
    absolutePath: `/${forumPrefix}/users/*`,
    relativePath: `users/*`,
    subConfigMap: {},
};
const forumUserProfileRoute = {
    href: `/${forumPrefix}/users/{username}`,
    id: "forum-user-profile",
    absolutePath: `/${forumPrefix}/users/:username`,
    relativePath: `:username`,
    subConfigMap: {},
    buildPath(relative, username) {
        if (!username)
            return `${relative ? this.relativePath : this.absolutePath}`;
        return (relative ? "" : "/") + `${forumPrefix}/users/${username}`;
    },
};
const forumLoginRoute = {
    href: `/${forumPrefix}/login/`,
    id: "forum-login",
    title: "Log In",
    absolutePath: `/${forumPrefix}/login/*`,
    relativePath: `login/*`,
    subConfigMap: {},
};
const forumLogoutRoute = {
    href: `/${forumPrefix}/logout/`,
    id: "forum-logout",
    title: "Log Out",
    absolutePath: `/${forumPrefix}/logout/*`,
    relativePath: `logout/*`,
    subConfigMap: {},
};
const forumSessionStatusRoute = {
    href: `/${forumPrefix}/status/`,
    id: "forum-session-status",
    title: "Status",
    absolutePath: `/${forumPrefix}/status/*`,
    relativePath: `status/*`,
    subConfigMap: {},
};
exports.forumRoutes = {
    root: forumRootRoute,
    posts: forumPostsRoute,
    postComment: forumPostCommentRoute,
    comments: forumCommentsRoute,
    comment_directLink: forumDirectCommentRoute,
    post_directLink: forumDirectPostRoute,
    users: forumUsersRoute,
    userProfile: forumUserProfileRoute,
    login: forumLoginRoute,
    logout: forumLogoutRoute,
    sessionStatus: forumSessionStatusRoute,
};
