/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

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
  const [selectedPictoId, setSelectedPictoId] = useState('')

  const handleMenuClose = (): void => {
    setAnchorEl(null)
    setSelectedPictoId('')
  }

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
                <IconButton
                  onClick={(event: {currentTarget: any}): void => {
                    setAnchorEl(event.currentTarget)
                    setSelectedPictoId(picto.id)
                  }}
                >
                  <Add className={classes.title} />
                </IconButton>
              }
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
            <TimeSlotMenu pictoId={selectedPictoId} timeslots={timeslots} anchorEl={anchorEl} handleMenuClose={handleMenuClose} clientId={clientId} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

interface TimeSlotMenuProps {
  pictoId: string
  timeslots: TimeSlot[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  anchorEl: any
  handleMenuClose: () => void
  clientId: string
}

const TimeSlotMenu: React.SFC<TimeSlotMenuProps> = ({pictoId, timeslots, anchorEl, handleMenuClose, clientId}): JSX.Element => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
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
              dispatch(assignPicto({pictoId, clientId, timeslotId: timeslot.id}))
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
  )
}
