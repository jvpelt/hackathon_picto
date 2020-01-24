import {timeSlotCollection} from 'stitch'
import {TimeSlot, FetchTimeSlotsParam, AssignPictoParam} from 'definitions'
import {RemoteUpdateResult} from 'mongodb-stitch-browser-sdk'

export const getTimeSlots = async ({clientId, day}: FetchTimeSlotsParam): Promise<TimeSlot[]> =>
  await timeSlotCollection.find({clientId, day}).toArray()
export const saveTimeSlot = async (timeSlot: TimeSlot): Promise<RemoteUpdateResult> =>
  timeSlotCollection.updateOne({id: timeSlot.id}, timeSlot, {upsert: true})
export const assignPicto = async ({clientId, pictoId, timeslotId}: AssignPictoParam): Promise<TimeSlot> => {
  const timeSlot = await timeSlotCollection.find({id: timeslotId, clientId}).first()
  if (!timeSlot) throw Error('sukkel')
  timeSlot.pictoIds.push(pictoId)
  await timeSlotCollection.updateOne({id: timeSlot.id}, timeSlot, {upsert: true})
  return timeSlot
}
