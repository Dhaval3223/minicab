import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import {  GET_ERROR, GET_TEST, SET_TEST } from "../redux/constant";
import { setLoading } from "./action";

function* GETTEST(action) {
  console.log("TEST saga call");
  yield put(setLoading(true)); // Dispatch loading action
  
  try {
    const res = yield axios.get(
      `https://dummyjson.com/carts`,
      // {
      //   headers: {
      //     Authorization: JSON.parse(localStorage.getItem('dream11-admin-tokin')),
      //     "Content-Type": "application/json",
      //   },
      // }
    );

    yield put({ type: SET_TEST, data: [res.data] });
  } catch (e) {
    console.error("Error in getGame saga:", e);
    yield put({ type: GET_ERROR, data: e });
  } finally {
    yield put(setLoading(false)); // Dispatch loading action
  }
}




function* productSaga() {
  yield takeEvery(GET_TEST, GETTEST);
}

export default productSaga;
