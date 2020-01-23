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
