import {Client} from 'definitions'

export enum ClientsActionTypes {
  FetchClients = 'clients/FETCH_CLIENTS',
  FetchClientsSuccess = 'clients/FETCH_CLIENTS_SUCCESS',
  FetchClientsError = 'clients/FETCH_CLIENTS_ERROR',
  CreateClient = 'clients/CREATE_CLIENT',
  CreateClientSuccess = 'clients/CREATE_CLIENT_SUCCESS',
  CreateClientError = 'clients/CREATE_CLIENT_ERROR',
  CreateClientDialog = 'clients/CREATE_CLIENT_DIALOG',
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

export interface CreateClientAction {
  type: ClientsActionTypes.CreateClient
  payload: Client
}

export interface CreateClientSuccessAction {
  type: ClientsActionTypes.CreateClientSuccess
  payload: Client
}

export interface CreateClientErrorAction {
  type: ClientsActionTypes.CreateClientError
}

export interface CreateClientDialog {
  type: ClientsActionTypes.CreateClientDialog
}

export type ClientsAction =
  | FetchClientsAction
  | FetchClientsSuccessAction
  | FetchClientsErrorAction
  | CreateClientAction
  | CreateClientSuccessAction
  | CreateClientErrorAction
