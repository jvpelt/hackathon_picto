import {ClientState, PlanningState, PictoState} from 'definitions'

export interface StoreState {
  clientState: ClientState
  planningState: PlanningState
  pictoState: PictoState
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
  TimeSlots = 'timeslots',
  Pictos = 'pictos',
}

export * from 'definitions/clients'
export * from 'definitions/planning'
export * from 'definitions/pictos'
