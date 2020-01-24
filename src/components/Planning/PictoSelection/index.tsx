import React, {useEffect} from 'react'
import i18n from 'i18next'
// import {Paper} from '@material-ui/core'
// import {useStyles} from 'components/Planning/PictoSelection/styles'
import {PictoList} from 'components/Planning/PictoSelection/PictoList'
import {useSelector, useDispatch} from 'react-redux'
import {StoreState, TimeSlotCollection} from 'definitions'
import {fetchPictos} from 'redux-logic/pictos'
import {Loading} from 'components/shared/Loading'

interface Props {
  timeslots: TimeSlotCollection
  clientId: string
}

export const PictoSelection: React.SFC<Props> = ({timeslots, clientId}): JSX.Element => {
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
    <PictoList
      pictos={Object.keys(pictos)
        .map(k => pictos[k])
        .sort((a, b) => a.title.localeCompare(b.title))}
      timeslots={Object.keys(timeslots)
        .map(k => timeslots[k])
        .sort((a, b) => a.timeSlot.localeCompare(b.timeSlot))}
      clientId={clientId}
    />
  )
}
