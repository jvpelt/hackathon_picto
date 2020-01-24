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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
}))
