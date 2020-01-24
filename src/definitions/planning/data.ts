import {StateMetaData} from 'definitions'

export interface FetchTimeSlotsParam {
  clientId: string
  day: Date
}

export interface AssignPictoParam {
  clientId: string
  pictoId: string
  timeslotId: string
}

export interface TimeSlot {
  id: string
  clientId: string
  day: Date
  timeSlot: string
  pictoIds: string[]
}
export type TimeSlotCollection = {[key: string]: TimeSlot}

export interface PlanningState {
  timeslots: TimeSlotCollection
  timeslotMeta: StateMetaData
}
