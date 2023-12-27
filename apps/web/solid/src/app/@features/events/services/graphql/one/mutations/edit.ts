import { appGql } from '@generated/gql';

export const gqlNode_EVENT_EDIT =
  appGql(`mutation EditEvent($event: EditEventInput!, $user: UserReferenceInput) {
  editEvent(event: $event, user: $user) {
    id
    title
    description
    start
    startDate
    end
    endDate
  }
}`);
