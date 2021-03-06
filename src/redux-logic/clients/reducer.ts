import {ClientCollection, StateMetaData, ClientState, ClientsAction, ClientsActionTypes} from 'definitions'
import {combineReducers} from 'redux'

const initialClientCollectionState: ClientCollection = {}
const clientReducer = (state = initialClientCollectionState, action: ClientsAction): ClientCollection => {
  switch (action.type) {
    case ClientsActionTypes.FetchClientsSuccess:
      return action.payload.reduce((obj, current) => ({...obj, [current.id]: current}), initialClientCollectionState)
    case ClientsActionTypes.CreateClientSuccess:
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

const clientMetaReducer = (state: StateMetaData = initialMetaState, action: ClientsAction): StateMetaData => {
  switch (action.type) {
    case ClientsActionTypes.FetchClients:
      return {...state, isLoading: true}
    case ClientsActionTypes.FetchClientsSuccess:
    case ClientsActionTypes.FetchClientsError:
      return {...state, isLoading: false}
    case ClientsActionTypes.CreateClient:
      return {...state, isSaving: true}
    case ClientsActionTypes.CreateClientSuccess:
    case ClientsActionTypes.CreateClientError:
      return {...state, isSaving: false}
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
