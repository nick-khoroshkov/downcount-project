import { call, put, takeLatest } from "redux-saga/effects";
import api from "api/api";
import types from "../types";

//** API FUNCTION GET LEAGUES LIST */

function* getLeagues(payload) {
  if (!payload.payload) {
    try {
      const { status, data } = yield call(api.leagues.getLeagues);
      if (status < 200 || status >= 300)
        throw new Error("Something went wrong");
      if (!data.length) {
        yield put({
          type: types.GET_LEAGUES_ERROR,
          payload:
            "It's seems that service is currently unavailable. Try again later",
        });
      }
      yield put({ type: types.GET_LEAGUES_SUCCESS, payload: data });
    } catch (error) {
      yield put({
        type: types.GET_LEAGUES_ERROR,
        payload:
          "It's seems that service is currently unavailable. Try again later",
      });
      if (error?.response?.status === 401) return;
      console.log("error", "Something went wrong");
    }
  } else {
    yield put({ type: types.GET_LEAGUES_SUCCESS, payload: payload.payload });
  }
}

export function* leaguesWatcher() {
  yield takeLatest(types.GET_LEAGUES_START, getLeagues);
}
