import {createStore, applyMiddleware, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'
import {rootReducer, initialStoreState} from 'redux-logic/rootReducer'
import {rootSaga} from 'redux-logic/rootSaga'
import {StoreState} from 'definitions'

export const setupStore = (initialState: StoreState = initialStoreState): Store => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  sagaMiddleware.run(rootSaga)
  return store
}
