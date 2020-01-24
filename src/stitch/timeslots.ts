import {timeSlotCollection} from 'stitch'
import {TimeSlot, FetchTimeSlotsParam} from 'definitions'
import {RemoteUpdateResult} from 'mongodb-stitch-browser-sdk'

export const getTimeSlots = async ({clientId, day}: FetchTimeSlotsParam): Promise<TimeSlot[]> =>
  await timeSlotCollection.find({clientId, day}).toArray()
export const saveTimeSlot = async (timeSlot: TimeSlot): Promise<RemoteUpdateResult> =>
  timeSlotCollection.updateOne({id: timeSlot.id}, timeSlot, {upsert: true})
