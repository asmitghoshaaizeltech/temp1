import { all, fork } from "redux-saga/effects";
import UserSaga from "./User/saga";


export default function* rootSaga() {
  yield all([
    fork(UserSaga),
  ]);
}
