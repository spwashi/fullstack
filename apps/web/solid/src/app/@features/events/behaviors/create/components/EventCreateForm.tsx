import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__createEvent } from "@features/events/behaviors/create/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@identities/graphql/nodes";

export function EventCreateForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.event.create,
    (formState) => formState
  );
  return (
    <>
      <FormWidget config={form__createEvent} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </>
  );
}
