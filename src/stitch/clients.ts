import {clientCollection} from 'stitch'
import {Client} from 'definitions'

export const getClients = async (): Promise<Client[]> => await clientCollection.find().toArray()
