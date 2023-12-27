import { appGql } from '@generated/gql';

export const gqlNode_USER_LOGIN =
  appGql(`mutation LogIn($user: UserLoginInput!, $project: ProjectReferenceInput, $password: PasswordReferenceInput) {
  logIn(user: $user, project: $project, password: $password) {
    jwt
    username
    user {
      id
      name
      username
    }
  }
}`);
