import {TimeSlotCollection, StateMetaData, PlanningState, PlanningAction, PlanningActionTypes} from 'definitions'
import {combineReducers} from 'redux'

const initialTimeSlotState: TimeSlotCollection = {}
const timeslotReducer = (state = initialTimeSlotState, action: PlanningAction): TimeSlotCollection => {
  switch (action.type) {
    case PlanningActionTypes.FetchTimeslotsSuccess:
      return action.payload.reduce((obj, current) => ({...obj, [current.id]: current}), initialTimeSlotState)
    case PlanningActionTypes.SaveTimeslotSuccess:
    case PlanningActionTypes.AssignPictoSuccess:
      return {...state, [action.payload.id]: action.payload}
    default:
      return state
  }
}

const initialMetaState: StateMetaData = {
  isLoading: false,
  hasError: false,
  errorText: '',
  isSaving: false,
}

const timeslotMetaReducer = (state: StateMetaData = initialMetaState, action: PlanningAction): StateMetaData => {
  switch (action.type) {
    case PlanningActionTypes.FetchTimeslots:
      return {...state, isLoading: true}
    case PlanningActionTypes.FetchTimeslotsSuccess:
    case PlanningActionTypes.FetchTimeslotsError:
      return {...state, isLoading: false}
    default:
      return state
  }
}

export const initialState: PlanningState = {
  timeslots: initialTimeSlotState,
  timeslotMeta: initialMetaState,
}

export const planningReducer = combineReducers({
  timeslots: timeslotReducer,
  timeslotMeta: timeslotMetaReducer,
})
