import { createContext } from "react";
import { Tag } from '@generated/graphql';

export type ITagContext = {
  tag: Tag | null;
  setTag: (tag: Tag) => void;
};

export const TagContext = createContext<ITagContext>({
  tag: null,
  setTag() {},
});
