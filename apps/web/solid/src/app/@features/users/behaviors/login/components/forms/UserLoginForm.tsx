import React from "react";
import { useMutationForm } from "@services/graphql/hooks/useMutationForm";
import { selectLoginInput } from "@features/users/behaviors/login/selectors";
import { LoginReceiver } from "@features/users/behaviors/login/components/actions/LoginReceiver";
import { FormWidget } from "@widgets/form/FormWidget";
import { form__login } from "@features/users/behaviors/login/config";
import { GraphqlMutationResponse } from "@services/graphql/components/api/GraphqlMutationResponse";
import { graphQlNodes } from "@identities/graphql/nodes";
import { featureIds } from "@identities/features/ids";
import { Feature } from "@widgets/feature";

export function UserLoginForm() {
  const [onsubmit, response] = useMutationForm(
    graphQlNodes.user.login,
    selectLoginInput
  );
  const resp = response?.data?.logIn ?? {};
  const { username, jwt, user } = resp;

  return (
    <Feature name={featureIds.user.login_form}>
      <LoginReceiver jwt={jwt} username={username} user={user} />
      <FormWidget config={form__login} onSubmit={onsubmit} />
      <GraphqlMutationResponse response={response} />
    </Feature>
  );
}
