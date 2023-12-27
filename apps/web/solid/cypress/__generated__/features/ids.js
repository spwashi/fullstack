"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureIdList = exports.featureIds = void 0;
const ids_1 = require("./admin/ids");
const ids_2 = require("./app/ids");
const ids_3 = require("./assets/ids");
const ids_4 = require("./concepts/ids");
const ids_5 = require("./events/ids");
const ids_6 = require("./projects/ids");
const ids_7 = require("./scenes/ids");
const ids_8 = require("./tags/ids");
const ids_9 = require("./users/ids");
const ids_10 = require("./demo/forum/ids");
exports.featureIds = {
    forum: ids_10.forumFeatureIds,
    app: ids_2.appFeatureIds,
    admin: ids_1.adminFeatureIds,
    asset: ids_3.assetFeatureIds,
    concept: ids_4.conceptFeatureIds,
    event: ids_5.eventFeatureIds,
    project: ids_6.projectFeatureIds,
    scene: ids_7.sceneFeatureIds,
    tag: ids_8.tagFeatureIds,
    user: ids_9.userFeatureIds,
};
exports.featureIdList = [
    ...Object.values(exports.featureIds.forum),
    ...Object.values(exports.featureIds.app),
    ...Object.values(exports.featureIds.admin),
    ...Object.values(exports.featureIds.asset),
    ...Object.values(exports.featureIds.concept),
    ...Object.values(exports.featureIds.event),
    ...Object.values(exports.featureIds.project),
    ...Object.values(exports.featureIds.scene),
    ...Object.values(exports.featureIds.tag),
    ...Object.values(exports.featureIds.user),
];
