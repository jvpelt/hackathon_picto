import {pictoCollection} from 'stitch'
import {PictoData} from 'definitions'
import {RemoteUpdateResult} from 'mongodb-stitch-browser-sdk'

export const getPictos = async (): Promise<PictoData[]> => await pictoCollection.find().toArray()
export const savePicto = async (picto: PictoData): Promise<RemoteUpdateResult> => pictoCollection.updateOne({id: picto.id}, picto, {upsert: true})
