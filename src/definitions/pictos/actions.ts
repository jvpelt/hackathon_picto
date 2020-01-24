import {PictoData} from 'definitions'

export enum PictoActionTypes {
  SavePicto = 'pictos/SAVE_PICTO',
  SavePictoSuccess = 'pictos/SAVE_PICTO_SUCCESS',
  SavePictoError = 'pictos/SAVE_PICTO_ERROR',
  FetchPictos = 'pictos/FETCH_PICTOS',
  FetchPictosSuccess = 'pictos/FETCH_PICTOS_SUCCESS',
  FetchPictosError = 'pictos/FETCH_PICTOS_ERROR',
}

export interface SavePictoAction {
  type: PictoActionTypes.SavePicto
  payload: PictoData
}

export interface SavePictoSuccessAction {
  type: PictoActionTypes.SavePictoSuccess
  payload: PictoData
}

export interface SavePictoErrorAction {
  type: PictoActionTypes.SavePictoError
}

export interface FetchPictosAction {
  type: PictoActionTypes.FetchPictos
}

export interface FetchPictosSuccessAction {
  type: PictoActionTypes.FetchPictosSuccess
  payload: PictoData[]
}

export interface FetchPictosErrorAction {
  type: PictoActionTypes.FetchPictosError
}

export type PictoAction =
  | SavePictoAction
  | SavePictoSuccessAction
  | SavePictoErrorAction
  | FetchPictosAction
  | FetchPictosSuccessAction
  | FetchPictosErrorAction
