/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {all, fork} from 'redux-saga/effects'
import {clientsSaga} from 'redux-logic/clients'
import {planningSaga} from 'redux-logic/planning'
import {pictoSaga} from 'redux-logic/pictos'

export function* rootSaga() {
  yield all([clientsSaga, planningSaga, pictoSaga].map(saga => fork(saga)))
}
