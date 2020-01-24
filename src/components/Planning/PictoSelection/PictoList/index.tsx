/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, Fragment} from 'react'
import i18n from 'i18next'
import {GridList, GridListTile, GridListTileBar, IconButton, Menu, MenuItem, ListItemText} from '@material-ui/core'
import {useStyles} from 'components/Planning/PictoSelection/PictoList/styles'
import {PictoData, TimeSlot} from 'definitions'
import {Add} from '@material-ui/icons'
import {useDispatch} from 'react-redux'
import {assignPicto} from 'redux-logic/planning/actionCreators'
// import {Chip} from '@material-ui/core'

interface Props {
  pictos: PictoData[]
  timeslots: TimeSlot[]
  clientId: string
}

export const PictoList: React.SFC<Props> = ({pictos, timeslots, clientId}): JSX.Element => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMenuOpen = (event: {currentTarget: any}): void => setAnchorEl(event.currentTarget)
  const handleMenuClose = (): void => setAnchorEl(null)

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={7}>
        {pictos.map((picto, index) => (
          <GridListTile key={index}>
            <img src={picto.data} alt={picto.title} />
            <GridListTileBar
              title={picto.title}
              titlePosition="top"
              //   title={
              //     <span>
              //       {tile.tags.map((tag, index) => (
              //         <Chip key={index} label={i18n.t(`pictos:tag:${tag}`)} size="small" className={classes.tagChip} />
              //       ))}
              //     </span>
              //   }
              actionIcon={
                <IconButton onClick={handleMenuOpen}>
                  <Add className={classes.title} />
                </IconButton>
              }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{vertical: 'top', horizontal: 'right'}}
              // keepMounted
              transformOrigin={{vertical: 'top', horizontal: 'right'}}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{disablePadding: true}}
            >
              {timeslots.length > 0 ? (
                timeslots.map(timeslot => (
                  <MenuItem
                    key={timeslot.id}
                    divider
                    onClick={(): void => {
                      dispatch(assignPicto({pictoId: picto.id, clientId, timeslotId: timeslot.id}))
                    }}
                  >
                    {timeslot.timeSlot}
                  </MenuItem>
                ))
              ) : (
                <MenuItem button={false} divider>
                  {i18n.t('planning:timeslot:notAvailable')}
                </MenuItem>
              )}
            </Menu>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

interface PictoItemProps {
  picto: PictoData
  timeslots: TimeSlot[]
}

const PictoItem: React.SFC<PictoItemProps> = ({picto, timeslots}): JSX.Element => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMenuOpen = (event: {currentTarget: any}): void => setAnchorEl(event.currentTarget)
  return (
    <GridListTile>
      <img src={picto.data} alt={picto.title} />
      <GridListTileBar
        title={picto.title}
        titlePosition="top"
        //   title={
        //     <span>
        //       {tile.tags.map((tag, index) => (
        //         <Chip key={index} label={i18n.t(`pictos:tag:${tag}`)} size="small" className={classes.tagChip} />
        //       ))}
        //     </span>
        //   }
        actionIcon={
          <IconButton onClick={handleMenuOpen}>
            <Add className={classes.title} />
          </IconButton>
        }
        classes={{
          root: classes.titleBar,
          title: classes.title,
        }}
      />
    </GridListTile>
  )
}
