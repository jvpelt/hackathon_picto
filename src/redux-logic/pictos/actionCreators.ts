import * as actions from 'definitions/pictos/actions'
import {PictoActionTypes, PictoData} from 'definitions'

export const fetchPictos = (): actions.FetchPictosAction => ({
  type: PictoActionTypes.FetchPictos,
})

export const fetchPictoSuccess = (payload: PictoData[]): actions.FetchPictosSuccessAction => ({
  type: PictoActionTypes.FetchPictosSuccess,
  payload,
})

export const fetchPictoError = (): actions.FetchPictosErrorAction => ({
  type: PictoActionTypes.FetchPictosError,
})

export const savePicto = (payload: PictoData): actions.SavePictoAction => ({
  type: PictoActionTypes.SavePicto,
  payload,
})

export const savePictoSuccess = (payload: PictoData): actions.SavePictoSuccessAction => ({
  type: PictoActionTypes.SavePictoSuccess,
  payload,
})

export const savePictoError = (): actions.SavePictoErrorAction => ({
  type: PictoActionTypes.SavePictoError,
})
