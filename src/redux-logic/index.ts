import {createStore, applyMiddleware, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'
import {rootReducer, initialStoreState} from 'redux-logic/rootReducer'
import {rootSaga} from 'redux-logic/rootSaga'

export interface StoreState {
  durp: string
}

export const setupStore = (initialState: StoreState = initialStoreState): Store => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)
  return store
}
