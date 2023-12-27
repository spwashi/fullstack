import { setFieldValue } from "@widgets/form/features/fields/helpers/setFieldValue";
import { makeFieldRequired } from "@widgets/form/features/fields/helpers/makeFieldRequired";
import { IFormConfig } from "@widgets/form/types/IFormConfig";
import { formId__conceptCreate } from "@identities/forms/ids";
import {
  contentTypeInput,
  srcInput,
  titleInput,
  userInput,
} from "../../data/config/inputs";

export const form__createConcept: IFormConfig = {
  title: "Create Concept",
  formId: formId__conceptCreate,
  items: [
    userInput,
    titleInput,
    setFieldValue(contentTypeInput, "text/plain"),
    srcInput,
  ].map(makeFieldRequired),
};
