import {TimeSlot, FetchTimeSlotsParam} from 'definitions'

export enum PlanningActionTypes {
  SaveTimeslot = 'planning/SAVE_TIMESLOT',
  SaveTimeslotSuccess = 'planning/SAVE_TIMESLOTSUCCESS',
  SaveTimeslotError = 'planning/SAVE_TIMESLOT_ERROR',
  FetchTimeslots = 'planning/FETCH_TIMESLOTS',
  FetchTimeslotsSuccess = 'planning/FETCH_TIMESLOTS_SUCCESS',
  FetchTimeslotsError = 'planning/FETCH_TIMESLOTS_ERROR',
}

export interface SaveTimeslotAction {
  type: PlanningActionTypes.SaveTimeslot
  payload: TimeSlot
}

export interface SaveTimeslotSuccessAction {
  type: PlanningActionTypes.SaveTimeslotSuccess
  payload: TimeSlot
}

export interface SaveTimeslotErrorAction {
  type: PlanningActionTypes.SaveTimeslotError
}

export interface FetchTimeslotsAction {
  type: PlanningActionTypes.FetchTimeslots
  payload: FetchTimeSlotsParam
}

export interface FetchTimeslotsSuccessAction {
  type: PlanningActionTypes.FetchTimeslotsSuccess
  payload: TimeSlot[]
}

export interface FetchTimeslotsErrorAction {
  type: PlanningActionTypes.FetchTimeslotsError
}

export type PlanningAction =
  | SaveTimeslotAction
  | SaveTimeslotSuccessAction
  | SaveTimeslotErrorAction
  | FetchTimeslotsAction
  | FetchTimeslotsSuccessAction
  | FetchTimeslotsErrorAction
