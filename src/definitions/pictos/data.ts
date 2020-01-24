import {StateMetaData} from 'definitions'

export enum PictoTags {
  Men = 'men',
  Woman = 'woman',
  BlackAndWhite = 'blackandwhite',
  Color = 'color',
}

export interface PictoState {
  pictos: PictoCollection
  pictoMeta: StateMetaData
}

export interface PictoData {
  id: string
  title: string
  data: string
}

export type PictoCollection = {[key: string]: PictoData}
