/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {PlanningActionTypes, TimeSlot, FetchTimeslotsAction, SaveTimeslotAction} from 'definitions'
// import i18n from 'i18next'
import {all, fork, take, put, call} from 'redux-saga/effects'
import {getTimeSlots, saveTimeSlot} from 'stitch/timeslots'
import * as actions from 'redux-logic/planning/actionCreators'
// import {errorNotification} from 'redux-logic/notification'

function* fetchTimeSlots(): any {
  while (true) {
    const {payload}: FetchTimeslotsAction = yield take(PlanningActionTypes.FetchTimeslots)
    try {
      const timeslots: TimeSlot[] = yield call(getTimeSlots, payload)
      yield put(actions.fetchTimeSlotSuccess(timeslots))
    } catch (err) {
      yield put(actions.fetchTimeSlotError())
      //   yield put(errorNotification(i18n.t('registrations:registration:fetchError')))
    }
  }
}

function* saveTimeSlotSaga(): any {
  while (true) {
    const {payload}: SaveTimeslotAction = yield take(PlanningActionTypes.SaveTimeslot)
    try {
      yield call(saveTimeSlot, payload)
      yield put(actions.saveTimeSlotSuccess(payload))
    } catch (err) {
      yield put(actions.saveTimeSlotError())
      //   yield put(errorNotification(i18n.t('registrations:registration:fetchError')))
    }
  }
}

export const planningSaga = function* rootSaga() {
  yield all([fetchTimeSlots, saveTimeSlotSaga].map(saga => fork(saga)))
}
