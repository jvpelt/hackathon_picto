import * as actions from 'definitions/planning/actions'
import {TimeSlot, PlanningActionTypes, FetchTimeSlotsParam, AssignPictoParam} from 'definitions'

export const fetchTimeSlots = (payload: FetchTimeSlotsParam): actions.FetchTimeslotsAction => ({
  type: PlanningActionTypes.FetchTimeslots,
  payload,
})

export const fetchTimeSlotSuccess = (payload: TimeSlot[]): actions.FetchTimeslotsSuccessAction => ({
  type: PlanningActionTypes.FetchTimeslotsSuccess,
  payload,
})

export const fetchTimeSlotError = (): actions.FetchTimeslotsErrorAction => ({
  type: PlanningActionTypes.FetchTimeslotsError,
})

export const saveTimeSlot = (payload: TimeSlot): actions.SaveTimeslotAction => ({
  type: PlanningActionTypes.SaveTimeslot,
  payload,
})

export const saveTimeSlotSuccess = (payload: TimeSlot): actions.SaveTimeslotSuccessAction => ({
  type: PlanningActionTypes.SaveTimeslotSuccess,
  payload,
})

export const saveTimeSlotError = (): actions.SaveTimeslotErrorAction => ({
  type: PlanningActionTypes.SaveTimeslotError,
})

export const assignPicto = (payload: AssignPictoParam): actions.AssignPictoAction => ({
  type: PlanningActionTypes.AssignPicto,
  payload,
})

export const assignPictoSuccess = (payload: TimeSlot): actions.AssignPictoSuccessAction => ({
  type: PlanningActionTypes.AssignPictoSuccess,
  payload,
})

export const assignPictoError = (): actions.AssignPictoErrorAction => ({
  type: PlanningActionTypes.AssignPictoError,
})
