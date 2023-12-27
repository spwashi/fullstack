import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useDispatchGraphqlError,
  useFeatureQuery,
} from "@widgets/feature/hooks/useFeatureQuery";
import { graphQlNodes } from "@identities/graphql/nodes";
import {
  selectPossibleTagsLastFetched,
  selectTagStateKey,
} from "../../../redux/selectors";
import { ACTION_RECEIVE_ALL_TAGS } from "../../../redux/reducer";

export function TagListQuery() {
  const stateKey = useSelector(selectTagStateKey);
  const { data, error } = useFeatureQuery(
    graphQlNodes.tag.fetchList,
    null,
    stateKey
  );
  const lastFetched = useSelector(selectPossibleTagsLastFetched);
  const dispatch = useDispatch();

  useDispatchGraphqlError(error);

  useEffect(() => {
    if (!data) return;
    const options = data.tagList ? data.tagList : [];
    dispatch({ type: ACTION_RECEIVE_ALL_TAGS, payload: options });
  }, [data?.tagList]);

  return !lastFetched ? <>Loading...</> : null;
}
