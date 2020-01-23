import {StateMetaData} from 'definitions'

export interface Client {
  id: string
  name: string
}

export type ClientCollection = {[key: string]: Client}

export interface ClientState {
  clients: ClientCollection
  meta: StateMetaData
}
