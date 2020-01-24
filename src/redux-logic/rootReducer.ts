import {combineReducers} from 'redux'
import {StoreState} from 'definitions'
import {initialState as initialClientState, clientsReducer} from 'redux-logic/clients'
import {initialState as initialPlanningState, planningReducer} from 'redux-logic/planning'
import {initialState as initialPictoState, pictoReducer} from 'redux-logic/pictos'

export const initialStoreState: StoreState = {
  clientState: initialClientState,
  planningState: initialPlanningState,
  pictoState: initialPictoState,
}

const appReducer = combineReducers<StoreState>({
  clientState: clientsReducer,
  planningState: planningReducer,
  pictoState: pictoReducer,
})

export const rootReducer = (state: StoreState | undefined, action: {type: string}): StoreState => {
  return appReducer(state, action)
}
