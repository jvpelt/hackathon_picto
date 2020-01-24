import React from 'react'
import i18n from 'i18next'
import {Paper, GridList, GridListTile} from '@material-ui/core'
import {useStyles} from 'components/Pictos/PictoOverview/styles'
import {PictoData} from 'definitions'

interface Props {
  pictos: PictoData[]
}

export const PictoOverview: React.SFC<Props> = ({pictos}): JSX.Element => {
  const classes = useStyles()
  console.log(pictos)

  return (
    <Paper className={classes.paper}>
      <div>
        {pictos.length > 0 ? (
          <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={12}>
              {pictos.map(picto => (
                <GridListTile key={picto.id} cols={1}>
                  <img src={picto.data} alt={picto.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        ) : (
          <div>{i18n.t('pictos:notAvailable')}</div>
        )}
      </div>
    </Paper>
  )
}
