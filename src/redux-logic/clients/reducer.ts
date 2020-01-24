import {ClientCollection, StateMetaData, ClientState, ClientsAction, ClientsActionTypes} from 'definitions'
import {combineReducers} from 'redux'

const initialClientCollectionState: ClientCollection = {}
const clientReducer = (state = initialClientCollectionState, action: ClientsAction): ClientCollection => {
  switch (action.type) {
    case ClientsActionTypes.FetchClientsSuccess:
      return action.payload.reduce((obj, current) => ({...obj, [current.id]: current}), initialClientCollectionState)
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

const clientMetaReducer = (state: StateMetaData = initialMetaState, action: ClientsAction): StateMetaData => {
  switch (action.type) {
    case ClientsActionTypes.FetchClients:
      return {...state, isLoading: true}
    case ClientsActionTypes.FetchClientsSuccess:
    case ClientsActionTypes.FetchClientsError:
      return {...state, isLoading: false}
    default:
      return state
  }
}

export const initialState: ClientState = {
  clients: initialClientCollectionState,
  meta: initialMetaState,
}

export const clientsReducer = combineReducers({
  clients: clientReducer,
  meta: clientMetaReducer,
})
