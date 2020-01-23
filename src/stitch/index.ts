import {Stitch, AnonymousCredential, RemoteMongoClient, StitchUser} from 'mongodb-stitch-browser-sdk'
import {DbCollections, Client} from 'definitions'

const stitchApp = Stitch.hasAppClient(process.env.REACT_APP_STITCH_APP_ID)
  ? Stitch.getAppClient(process.env.REACT_APP_STITCH_APP_ID)
  : Stitch.initializeAppClient(process.env.REACT_APP_STITCH_APP_ID)

// Initialize Stitch Query Anywhere
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mongodb = stitchApp.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
export const clientCollection = mongodb.db(process.env.REACT_APP_DB_NAME).collection<Client>(DbCollections.Clients)

// Login with msal
export const loginWithNothing = (): Promise<StitchUser> => stitchApp.auth.loginWithCredential(new AnonymousCredential())
