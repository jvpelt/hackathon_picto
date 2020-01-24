import React, {useState, Fragment, useEffect, ChangeEvent} from 'react'
import i18n from 'i18next'
import {addDays, getDay, format} from 'date-fns'
import {Paper, IconButton, Tooltip, Typography, Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button} from '@material-ui/core'
import {useStyles} from 'components/Planning/DayPlanner/styles'
import {ChevronLeft, ChevronRight, Add} from '@material-ui/icons'
import {useDispatch, useSelector} from 'react-redux'
import {StoreState, TimeSlotCollection} from 'definitions'
import {fetchTimeSlots, saveTimeSlot} from 'redux-logic/planning'
import {Loading} from 'components/shared/Loading'
import {TimeSlots} from 'components/Planning/DayPlanner/TimeSlots'
import {v4} from 'uuid'

interface Props {
  clientId: string
  timeslots: TimeSlotCollection
}

export const DayPlanner: React.SFC<Props> = ({clientId, timeslots}): JSX.Element => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [selectedDay, setSelectedDay] = useState(new Date(new Date().setHours(0, 0, 0, 0)))
  const {isLoading, isSaving} = useSelector(({planningState: {timeslotMeta}}: StoreState) => timeslotMeta)

  useEffect(() => {
    dispatch(fetchTimeSlots({clientId, day: selectedDay}))
  }, [clientId, dispatch, selectedDay])

  if (isLoading) {
    return <Loading message={i18n.t('planning:timeslot:loading')} />
  }

  if (isSaving) {
    return <Loading message={i18n.t('planning:timeslot:saving')} />
  }

  return (
    <Paper className={classes.paper}>
      <Header selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <TimeSlots timeslots={timeslots} />
      <AddTimeSlot clientId={clientId} day={selectedDay} />
    </Paper>
  )
}

interface HeaderProps {
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>
  selectedDay: Date
}
const Header: React.SFC<HeaderProps> = ({setSelectedDay, selectedDay}): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.headerRow}>
      <IconButton color="primary" size="small" onClick={(): void => setSelectedDay(addDays(selectedDay, -1))}>
        <ChevronLeft />
      </IconButton>
      <Tooltip title={i18n.t('planning:day:tooltip')}>
        <Typography variant="h6">{`${i18n.t(`planning:day:${getDay(selectedDay)}`)} ${format(selectedDay, 'd-M')}`}</Typography>
      </Tooltip>
      <IconButton color="primary" size="small" onClick={(): void => setSelectedDay(addDays(selectedDay, 1))}>
        <ChevronRight />
      </IconButton>
    </div>
  )
}

interface AddSlotProps {
  clientId: string
  day: Date
}
const AddTimeSlot: React.SFC<AddSlotProps> = ({clientId, day}): JSX.Element => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const [timeSlot, setTimeSlot] = React.useState('')

  const handleOnOpen = (): void => setOpen(true)
  const handleClose = (): void => setOpen(false)
  const handleOnSave = (): void => {
    dispatch(saveTimeSlot({id: v4(), clientId, day, timeSlot, pictoIds: []}))
    setOpen(false)
  }
  const handleChangeTimeSlot = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTimeSlot(event.currentTarget.value)
  }
  return (
    <Fragment>
      <Tooltip title={i18n.t('planning:timeslot:tooltip')}>
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleOnOpen}>
          <Add />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{i18n.t('planning:timeslot:add:title')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={i18n.t('planning:timeslot:add:label')}
            type="text"
            value={timeSlot}
            onChange={handleChangeTimeSlot}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {i18n.t('planning:timeslot:add:cancel')}
          </Button>
          <Button onClick={handleOnSave} color="primary">
            {i18n.t('planning:timeslot:add:save')}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
