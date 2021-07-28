import { call, put, takeLatest } from "redux-saga/effects";
import api from "api/api";
import types from "../types";

function* getConfiguration() {
  try {
    const { status, data } = yield call(api.config.getConfig);
    if (status < 200 || status >= 300) {
      yield put({
        type: types.GET_CONFIG_ERROR,
        payload:
          "Something went wrong. There's an issue on our end and we can't show games. Please try again later",
      });
    } else yield put({ type: types.GET_CONFIG_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: types.GET_CONFIG_ERROR,
      payload:
        "Something went wrong. There's an issue on our end and we can't show games. Please try again later",
    });
    if (error?.response?.status === 401) return;
    yield put({
      type: types.GET_CONFIG_ERROR,
      payload:
        "Something went wrong. There's an issue on our end and we can't show games. Please try again later",
    });
    console.log("error", "Something went wrong");
  }
}

export function* configWatcher() {
  yield takeLatest(types.GET_CONFIG_START, getConfiguration);
}
