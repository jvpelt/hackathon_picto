/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {ClientsActionTypes, Client, CreateClientAction} from 'definitions'
// import i18n from 'i18next'
import {all, fork, take, put, call} from 'redux-saga/effects'
import {getClients, saveClient} from 'stitch/clients'
import * as actions from 'redux-logic/clients/actionCreators'
// import {errorNotification} from 'redux-logic/notification'

function* fetchClients(): any {
  while (true) {
    yield take(ClientsActionTypes.FetchClients)
    try {
      const clients: Client[] = yield call(getClients)
      yield put(actions.fetchClientsSuccess(clients))
    } catch (err) {
      yield put(actions.fetchClientsError())
      //   yield put(errorNotification(i18n.t('registrations:registration:fetchError')))
    }
  }
}

function* createClient(): any {
  while (true) {
    const {payload}: CreateClientAction = yield take(ClientsActionTypes.CreateClient)
    try {
      yield call(saveClient, payload)
      yield put(actions.createClientSuccess())
    } catch (err) {
      yield put(actions.createClientError())
      //   yield put(errorNotification(i18n.t('registrations:registration:fetchError')))
    }
  }
}

export const clientsSaga = function* rootSaga() {
  yield all([fetchClients, createClient].map(saga => fork(saga)))
}
