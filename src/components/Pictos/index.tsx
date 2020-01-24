import React, {Fragment, useEffect} from 'react'
import i18n from 'i18next'
import {PictoOverview} from 'components/Pictos/PictoOverview'
import {UploadPicto} from 'components/Pictos/UploadPicto'
import {StoreState} from 'definitions'
import {useSelector, useDispatch} from 'react-redux'
import {Loading} from 'components/shared/Loading'
import {fetchPictos} from 'redux-logic/pictos'

export const PictoContainer = (): JSX.Element => {
  const dispatch = useDispatch()
  const pictos = useSelector(({pictoState: {pictos}}: StoreState) => pictos)
  const {isLoading, isSaving} = useSelector(({pictoState: {pictoMeta}}: StoreState) => pictoMeta)

  useEffect(() => {
    dispatch(fetchPictos())
  }, [dispatch])

  if (isLoading) {
    return <Loading message={i18n.t('pictos:loading')} />
  }

  if (isSaving) {
    return <Loading message={i18n.t('pictos:saving')} />
  }

  return (
    <Fragment>
      <UploadPicto />
      <PictoOverview
        pictos={Object.keys(pictos)
          .map(k => pictos[k])
          .sort((a, b) => a.title.localeCompare(b.title))}
      />
    </Fragment>
  )
}
