/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {all, fork} from 'redux-saga/effects'
import {clientsSaga} from 'redux-logic/clients'

export function* rootSaga() {
  yield all([clientsSaga].map(saga => fork(saga)))
}
