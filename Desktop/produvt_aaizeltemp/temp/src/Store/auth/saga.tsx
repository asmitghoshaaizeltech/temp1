import { call, put, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFailure, loginRequest } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { LoginPayload } from "./types";

// Simulate API call
const mockLoginApi = async (username: string, password: string) => {
  // This is a mock implementation - replace with real API call
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (username && password) {
        resolve({ token: "mock-jwt-token" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};

function* loginSaga(action: PayloadAction<LoginPayload>) {
  try {
    const { username, password } = action.payload;
    const response: { token: string } = yield call(
      mockLoginApi,
      username,
      password
    );
    localStorage.setItem("token", response.token);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(
      loginFailure(error instanceof Error ? error.message : "Login failed")
    );
  }
}

export function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}
