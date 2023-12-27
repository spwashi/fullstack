import { IFormItemConfig } from "@widgets/form/features/fields/types/fieldConfig";
import { IFormContextState } from "@widgets/form/context/types/state";
import { mimeOptions } from "./mimeOptions";

export const tagsInput: IFormItemConfig = {
  title: "Tags",
  name: "tags",
  type: "tags",
};
export const conceptInput: IFormItemConfig = {
  title: "Concept",
  name: "concept",
  type: "concept",
};
export const userInput: IFormItemConfig = {
  title: "User",
  name: "user",
  type: "user",
};
export const idInput: IFormItemConfig = {
  title: "ID",
  name: "id",
  type: "value",
};
export const titleInput: IFormItemConfig = {
  title: "Concept Title",
  name: "title",
  type: "text",
  validators: {
    onChange: [
      (formState: IFormContextState) => {
        return formState?.currentValue.title === "randomstring"
          ? "cannot be randomstring"
          : true;
      },
    ],
  },
};
export const contentTypeInput: IFormItemConfig = {
  title: "Content Type",
  name: "contentType",
  type: "select",
  options: mimeOptions,
};
export const srcInput: IFormItemConfig = {
  title: "Concept Contents",
  name: "src",
  type: "content",
  validators: {
    onSubmit: [
      () => {
        return true;
      },
    ],
  },
};
