import {combineReducers} from 'redux'
import {StoreState} from 'definitions'
import {initialState as initialClientState, clientsReducer} from 'redux-logic/clients'

export const initialStoreState: StoreState = {
  clientState: initialClientState,
}

const appReducer = combineReducers<StoreState>({
  clientState: clientsReducer,
})

export const rootReducer = (state: StoreState | undefined, action: {type: string}): StoreState => {
  return appReducer(state, action)
}
