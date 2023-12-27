import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IS_AUTHENTICATED_URL } from "@core/constants";
import { useJwt } from "@services/jwt/hooks/useJwt";
import { Feature } from "@widgets/feature";
import { logoutUser } from "@features/users/behaviors/logout/helpers/logoutUser";
import { featureIds } from "@identities/features/ids";

/**
 * Checks the current jwt, logging out if the jwt is invalid
 */
export function LoginChecker() {
  const dispatch = useDispatch();
  const jwt = useJwt();
  useEffect(() => {
    fetch(IS_AUTHENTICATED_URL, {
      method: "POST",
      body: JSON.stringify({ token: jwt }),
      headers: {
        "Content-Type": "application/json",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      if (res.status !== 200) {
        logoutUser(dispatch);
      }
    });
  }, [jwt]);

  return <Feature name={featureIds.user.login_verify} />;
}
