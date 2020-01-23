import {Client} from 'definitions'

export enum ClientsActionTypes {
  FetchClients = 'clients/FETCH_CLIENTS',
  FetchClientsSuccess = 'registrations/FETCH_CLIENTS_SUCCESS',
  FetchClientsError = 'registrations/FETCH_CLIENTS_ERROR',
}

export interface FetchClientsAction {
  type: ClientsActionTypes.FetchClients
}

export interface FetchClientsSuccessAction {
  type: ClientsActionTypes.FetchClientsSuccess
  payload: Client[]
}

export interface FetchClientsErrorAction {
  type: ClientsActionTypes.FetchClientsError
}

export type ClientsAction = FetchClientsAction | FetchClientsSuccessAction | FetchClientsErrorAction
