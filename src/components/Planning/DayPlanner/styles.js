import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  paper: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  timeColumn: {
    width: '20%',
  },
  noSlots: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
