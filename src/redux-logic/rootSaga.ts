/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {all, fork} from 'redux-saga/effects'

export function* rootSaga() {
  yield all([].map(saga => fork(saga)))
}
