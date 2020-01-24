import {ClientState} from 'definitions'

export interface StoreState {
  clientState: ClientState
}

export interface StateMetaData {
  isLoading: boolean
  hasError: boolean
  errorText: string
  isSaving: boolean
}

export enum Routes {
  Clients = '/clients',
  Pictos = '/pictos',
  Planning = '/planning',
}

export enum DbCollections {
  Clients = 'clients',
}

export * from 'definitions/clients'
