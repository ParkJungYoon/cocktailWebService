import React, { useContext, useEffect } from "react";
import { UserContext } from "../user/reducer/userReducer";

export default function useUserHook() {
  const { userState, userDispatch } = useContext(UserContext);
  useEffect(() => {
    const isLogin = !!userState.user;
    if (isLogin === false) return null;
    return userState.user;
  });
  return userState;
}
