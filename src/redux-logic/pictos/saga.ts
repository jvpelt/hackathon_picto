/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {PictoActionTypes, SavePictoAction, PictoData} from 'definitions'
// import i18n from 'i18next'
import {all, fork, take, put, call} from 'redux-saga/effects'
import {getPictos, savePicto} from 'stitch/pictos'
import * as actions from 'redux-logic/pictos/actionCreators'
// import {errorNotification} from 'redux-logic/notification'

function* fetchPictos(): any {
  while (true) {
    yield take(PictoActionTypes.FetchPictos)
    try {
      const pictos: PictoData[] = yield call(getPictos)
      yield put(actions.fetchPictoSuccess(pictos))
    } catch (err) {
      yield put(actions.fetchPictoError())
      //   yield put(errorNotification(i18n.t('registrations:registration:fetchError')))
    }
  }
}

function* savePictoSaga(): any {
  while (true) {
    const {payload}: SavePictoAction = yield take(PictoActionTypes.SavePicto)
    try {
      yield call(savePicto, payload)
      yield put(actions.savePictoSuccess(payload))
    } catch (err) {
      yield put(actions.savePictoError())
      //   yield put(errorNotification(i18n.t('registrations:registration:fetchError')))
    }
  }
}

export const pictoSaga = function* rootSaga() {
  yield all([fetchPictos, savePictoSaga].map(saga => fork(saga)))
}
