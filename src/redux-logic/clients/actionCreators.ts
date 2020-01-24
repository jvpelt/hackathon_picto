import * as actions from 'definitions/clients/actions'
import {Client, ClientsActionTypes} from 'definitions'

export const fetchClients = (): actions.FetchClientsAction => ({
  type: ClientsActionTypes.FetchClients,
})

export const fetchClientsSuccess = (payload: Client[]): actions.FetchClientsSuccessAction => ({
  type: ClientsActionTypes.FetchClientsSuccess,
  payload,
})

export const fetchClientsError = (): actions.FetchClientsErrorAction => ({
  type: ClientsActionTypes.FetchClientsError,
})

export const createClient = (payload: Client): actions.CreateClientAction => ({
  type: ClientsActionTypes.CreateClient,
  payload,
})

export const createClientSuccess = (): actions.CreateClientSuccessAction => ({
  type: ClientsActionTypes.CreateClientSuccess,
})

export const createClientError = (): actions.CreateClientErrorAction => ({
  type: ClientsActionTypes.CreateClientError,
})

export const createClientDialog = (): actions.CreateClientDialog => ({
  type: ClientsActionTypes.CreateClientDialog,
})