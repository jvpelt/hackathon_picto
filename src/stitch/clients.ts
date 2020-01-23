import {clientCollection} from 'stitch'
import {Client} from 'definitions'
import {RemoteUpdateResult} from 'mongodb-stitch-browser-sdk'

export const getClients = async (): Promise<Client[]> => await clientCollection.find().toArray()
export const saveClient = async (client: Client): Promise<RemoteUpdateResult> => clientCollection.updateOne({id: client.id}, client, {upsert: true})
