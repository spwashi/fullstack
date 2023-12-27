import React from "react";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { graphQlNodes } from "@identities/graphql/nodes";
import { form__tagConcept } from "../config";

export function ConceptTagForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.concept.tag,
    (formState) => formState
  );
  return (
    <section id="form__concept-tag">
      <FormWidget config={form__tagConcept} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </section>
  );
}
