import React from 'react'
// import i18n from 'i18next'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {useStyles} from 'components/Planning/PictoSelection/PictoList/styles'
import {tileData} from './tileData'
// import {Chip} from '@material-ui/core'

export const PictoList = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={7}>
        {tileData.map((tile, index) => (
          <GridListTile key={index}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              //   title={
              //     <span>
              //       {tile.tags.map((tag, index) => (
              //         <Chip key={index} label={i18n.t(`pictos:tag:${tag}`)} size="small" className={classes.tagChip} />
              //       ))}
              //     </span>
              //   }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
