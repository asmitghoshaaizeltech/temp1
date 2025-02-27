import { call, put, takeEvery } from "redux-saga/effects";
import {
  getUserlist,
  getUserlistSuccess,
  getUserlistFail,

  getUserView,
  getUserViewSuccess,
  getUserViewFail,

  AddUserlist,
  AddUserlistSuccess,
  AddUserlistFail,

  DeleteUserlist,
  DeleteUserlistSuccess,
  DeleteUserlistFail,

  UpdateUserdatalist,
  UpdateUserdatalistSuccess,
  UpdateUserdatalistFail,
} from "./action";
import {
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_ERROR,

  GET_USER_VIEW,
  GET_USER_VIEW_ERROR,
  GET_USER_VIEW_SUCCESS,

  ADD_USER_LIST,
  ADD_USER_LIST_ERROR,
  ADD_USER_LIST_SUCCESS,

  DELETE_USER_LIST,
  DELETE_USER_LIST_ERROR,
  DELETE_USER_LIST_SUCCESS,

  UPDATE_USER_DATA_LIST,
  UPDATE_USER_DATA_LIST_ERROR,
  UPDATE_USER_DATA_LIST_SUCCESS,
} from "./actionType";
import {
  UserlistApi,
  UserlistViewApi,
  AddUserlistApi,
  DelUserlistApi,
  UpdateUserdatalistApi,
} from "../../helper/Demo_helper";

function* onGetuserList({ payload: requstuserlist }) {
  try {
    const reponse = yield call(UserlistApi, requstuserlist);
    yield put(getUserlistSuccess(GET_USER_LIST, reponse));
  } catch (error) {
    yield put(getUserlistFail(error));
  }
}

function* onGetuserView({ payload: requstuser }) {
  try {
    const reponse = yield call(UserlistViewApi, requstuser);
    yield put(getUserViewSuccess(GET_USER_VIEW, reponse));
  } catch (error) {
    yield put(getUserViewFail(error));
  }
}

function* onGetAdduserList({ payload: requstuser }) {
  try {
    const reponse = yield call(AddUserlistApi, requstuser);
    yield put(AddUserlistSuccess(ADD_USER_LIST, reponse));


    if (reponse.success == true) {

      let requserdata = {
        page: 1,
        size: 5,
        search: null
      };
      const reponse = yield call(UserlistApi, requserdata);
      yield put(getUserlistSuccess(GET_USER_LIST, reponse));
    } 
  } catch (error) {
    yield put(AddUserlistFail(error));
  }
}

function* onGetDeleteuserList({ payload: requstuser }) {
  try {
    const reponse = yield call(DelUserlistApi, requstuser);
    yield put(DeleteUserlistSuccess(DELETE_USER_LIST, reponse));

    if (reponse.success == true) {
      let requserdata = {
        search: null,
        page: 1,
        size: 5,
      };
      const reponse = yield call(UserlistApi, requserdata);
      yield put(getUserlistSuccess(GET_USER_LIST, reponse));
    }

  } catch (error) {
    yield put(DeleteUserlistFail(error));
  }
}

function* onGetUpdateUserdatalist({ payload: requstuser }) {
  try {
    const reponse = yield call(UpdateUserdatalistApi, requstuser);
    yield put(UpdateUserdatalistSuccess(UPDATE_USER_DATA_LIST, reponse));
    if (reponse.success == true) {
      let requserdata = {
        page: 1,
        size: 5,
        search: null
      };
      const reponse = yield call(UserlistApi, requserdata);
      yield put(getUserlistSuccess(GET_USER_LIST, reponse));
    } 
  } catch (error) {
    yield put(UpdateUserdatalistFail(error));
  }
}

function* UserSaga() {
  yield takeEvery(GET_USER_LIST, onGetuserList);
  yield takeEvery(GET_USER_VIEW, onGetuserView);
  yield takeEvery(ADD_USER_LIST, onGetAdduserList);
  yield takeEvery(DELETE_USER_LIST, onGetDeleteuserList);
  yield takeEvery(UPDATE_USER_DATA_LIST, onGetUpdateUserdatalist);
}

export default UserSaga;
