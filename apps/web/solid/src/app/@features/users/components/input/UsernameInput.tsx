import React from "react";
import { Input } from "@widgets/form/features/fields/components/input/text/Input";
import { UserSelect } from "./UserSelect";

export function UsernameInput({
  doSelect = false,
  ignoreLogin,
}: {
  doSelect?: boolean;
  ignoreLogin?: boolean;
}) {
  return (
    <>
      {doSelect || !ignoreLogin ? (
        <UserSelect formKey="username" />
      ) : (
        <Input formKey="username" placeholder="Username" />
      )}
    </>
  );
}
