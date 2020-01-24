import React, {useEffect} from 'react'
import i18n from 'i18next'
import {StoreState, PictoCollection} from 'definitions'
import {useSelector, useDispatch} from 'react-redux'
import {Loading} from 'components/shared/Loading'
import {Paper} from '@material-ui/core'
import {useStyles} from 'components/Pictos/PictoOverview/styles'
import {fetchPictos} from 'redux-logic/pictos'

export const PictoOverview = (): JSX.Element => {
  const classes = useStyles()
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
    <Paper className={classes.paper}>
      <PictoGrid pictos={pictos} />
    </Paper>
  )
}

interface PictoGridProps {
  pictos: PictoCollection
}
const PictoGrid: React.SFC<PictoGridProps> = ({pictos}): JSX.Element => {
  const pictoArr = Object.keys(pictos)
    .map(k => pictos[k])
    .sort((a, b) => a.title.localeCompare(b.title))

  return <div>{pictoArr.length > 1 ? <div>fancy grid</div> : <div>{i18n.t('pictos:notAvailable')}</div>}</div>
}
