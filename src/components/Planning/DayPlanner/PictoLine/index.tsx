import React from 'react'
import i18n from 'i18next'
import {useStyles} from 'components/Planning/DayPlanner/PictoLine/styles'
import {GridList, GridListTile} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {StoreState} from 'definitions'
import {Loading} from 'components/shared/Loading'

interface Props {
  pictoIds: string[]
}

export const PictoLine: React.SFC<Props> = ({pictoIds}): JSX.Element => {
  const classes = useStyles()

  const pictos = useSelector(({pictoState: {pictos}}: StoreState) => pictos)
  const {isLoading} = useSelector(({pictoState: {pictoMeta}}: StoreState) => pictoMeta)

  if (isLoading) {
    return <Loading message={i18n.t('pictos:loading')} />
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {pictoIds.map((pictoId, index) => (
          <GridListTile key={`${pictoId}-${index}`} cols={1}>
            <img src={pictos[pictoId].data} alt={pictos[pictoId].title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
