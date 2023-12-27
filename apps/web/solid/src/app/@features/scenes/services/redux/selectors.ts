import { IRootAppState } from "@core/types/IRootAppState";
import { Scene } from '@generated/graphql';
import { SceneOption } from "./types";

function sceneToOption(scene: Scene): SceneOption {
  return {
    title: scene.title ?? scene.name,
    value: scene.id,
    payload: scene.id,
  };
}

export const selectSceneFeature = (state: IRootAppState) =>
  state.features.scene;
export const selectSceneList = (state: IRootAppState) =>
  selectSceneFeature(state).data.scenes.list;
export const selectPossibleSceneOptions = (state: IRootAppState) =>
  selectSceneList(state)?.map(sceneToOption);
export const selectPossibleScenesLastFetched = (state: IRootAppState) =>
  selectSceneFeature(state).data.scenes.lastFetched;
export const selectSceneStateKey = (state: IRootAppState) =>
  selectSceneFeature(state).state.key;
