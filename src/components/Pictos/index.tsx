import React, {Fragment} from 'react'
import {PictoOverview} from 'components/Pictos/PictoOverview'
import {UploadPicto} from 'components/Pictos/UploadPicto'

export const PictoContainer = (): JSX.Element => {
  return (
    <Fragment>
      <PictoOverview />
      <UploadPicto />
    </Fragment>
  )
}
