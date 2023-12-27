import { IRootAppState } from "@core/types/IRootAppState";
import { User } from '@generated/graphql';
import { UserOption } from "./types";

function userToOption(user: User): UserOption {
  return {
    title: user.username,
    value: user.id,
    payload: user.id,
  };
}

export const selectUserFeature = (state: IRootAppState) =>
  state?.features?.user;
export const selectPossibleUsersOptions = (state: IRootAppState) =>
  selectUserFeature(state).data.users.list.map(userToOption);
export const selectPossibleUsersLastFetched = (state: IRootAppState) =>
  selectUserFeature(state).data.users.lastFetched;
