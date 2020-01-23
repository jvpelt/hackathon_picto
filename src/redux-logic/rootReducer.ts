import {combineReducers} from 'redux'
import {StoreState} from 'redux-logic'

export const initialStoreState: StoreState = {
  durp: 'burp',
}

const durpReducer = (state = 'durp', action: {type: string}): string => {
  switch (action.type) {
    default:
      return state
  }
}

const appReducer = combineReducers<StoreState>({
  durp: durpReducer,
})

export const rootReducer = (state: StoreState | undefined, action: {type: string}): StoreState => {
  return appReducer(state, action)
}
