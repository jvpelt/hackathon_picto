// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ts from 'typescript'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_VERSION: string
      REACT_APP_PACKAGENAME: string
      REACT_APP_ENV: string
      REACT_APP_STITCH_APP_ID: string
      REACT_APP_DB_NAME: string
    }
  }
}
