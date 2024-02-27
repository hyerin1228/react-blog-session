// 공장(reducer) 제작하려고 만든 파일

import { UnknownAction } from "redux";

// 공장 -> 뭔가 일을 하는 곳. 작업을 하는 곳.

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action: UnknownAction) {
  // 작업 시작

  const nextState = { ...prevState };
  // 작업 종류
  if (action.type === LOG_IN) {
    nextState.isLoggedIn = true;
  }

  if (action.type === LOG_OUT) {
    nextState.isLoggedIn = false;
  }

  return nextState;
}

export default authReducer;
