import {StateMetaData, PictoActionTypes, PictoCollection, PictoAction, PictoState} from 'definitions'
import {combineReducers} from 'redux'

const initialPictoState: PictoCollection = {}
const pictoDataReducer = (state = initialPictoState, action: PictoAction): PictoCollection => {
  switch (action.type) {
    case PictoActionTypes.FetchPictosSuccess:
      return action.payload.reduce((obj, current) => ({...obj, [current.id]: current}), initialPictoState)
    case PictoActionTypes.SavePictoSuccess:
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

const pictoMetaReducer = (state: StateMetaData = initialMetaState, action: PictoAction): StateMetaData => {
  switch (action.type) {
    case PictoActionTypes.FetchPictos:
      return {...state, isLoading: true}
    case PictoActionTypes.FetchPictosSuccess:
    case PictoActionTypes.FetchPictosError:
      return {...state, isLoading: false}
    default:
      return state
  }
}

export const initialState: PictoState = {
  pictos: initialPictoState,
  pictoMeta: initialMetaState,
}

export const pictoReducer = combineReducers({
  pictos: pictoDataReducer,
  pictoMeta: pictoMetaReducer,
})
