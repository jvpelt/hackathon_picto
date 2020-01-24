/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
  },
  content: {
    '@media (min-width:0px) and (orientation: landscape)': {
      paddingTop: theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight,
    },
    '@media (min-width:600px)': {
      paddingTop: theme.mixins.toolbar['@media (min-width:600px)'].minHeight,
    },
    paddingTop: theme.mixins.toolbar.minHeight,
    height: '100%',
    width: '100%',
    flexGrow: 1,
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loadingText: {
    marginTop: theme.spacing(2),
  },
  logoutButton: {
    marginTop: theme.spacing(2),
  },
}))
