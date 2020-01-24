import React from 'react'
import i18n from 'i18next'
import {TimeSlot, TimeSlotCollection} from 'definitions'
import {TableRow, TableCell, TableContainer, Table, TableBody} from '@material-ui/core'
import {useStyles} from 'components/Planning/DayPlanner/styles'

interface TimeSlotsProps {
  timeslots: TimeSlotCollection
}

export const TimeSlots: React.SFC<TimeSlotsProps> = ({timeslots}): JSX.Element => {
  const slots = Object.keys(timeslots)
    .map(k => timeslots[k])
    .sort((a, b) => a.timeSlot.localeCompare(b.timeSlot))

  return (
    <TableContainer>
      <Table>
        <TableBody>{slots.length > 0 ? slots.map(slot => <Slot key={slot.id} timeslot={slot} />) : <EmptySlot />}</TableBody>
      </Table>
    </TableContainer>
  )
}

interface Props {
  timeslot: TimeSlot
}
const Slot: React.SFC<Props> = ({timeslot}): JSX.Element => {
  const classes = useStyles()
  return (
    <TableRow key={timeslot.id}>
      <TableCell component="th" scope="row" className={classes.timeColumn}>
        {timeslot.timeSlot}
      </TableCell>
      <TableCell>{timeslot.pictoIds.length > 0 ? <div>pictos</div> : i18n.t('planning:pictos:notAvailable')}</TableCell>
    </TableRow>
  )
}

const EmptySlot = (): JSX.Element => {
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell component="th" scope="row" className={classes.noSlots}>
        {i18n.t('planning:timeslot:notAvailable')}
      </TableCell>
    </TableRow>
  )
}
