import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFeatureQuery } from "@widgets/feature/hooks/useFeatureQuery";
import { graphQlNodes } from "@identities/graphql/nodes";
import { ACTION_RECEIVE_ALL_SCENES } from "../../../redux/reducer";
import {
  selectPossibleScenesLastFetched,
  selectSceneStateKey,
} from "../../../redux/selectors";

export function SceneListQuery() {
  const stateKey = useSelector(selectSceneStateKey);
  const { data: query } = useFeatureQuery(
    graphQlNodes.scene.fetchList,
    null,
    stateKey
  );
  const lastFetched = useSelector(selectPossibleScenesLastFetched);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ACTION_RECEIVE_ALL_SCENES,
      payload: query?.sceneList ? query.sceneList : [],
    });
  }, [query?.sceneList]);

  return !lastFetched ? <>Loading...</> : null;
}
