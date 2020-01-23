/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {makeStyles} from '@material-ui/core'

const drawerWidth = 280

export const useStyles = makeStyles(theme => ({
  menuList: {
    width: drawerWidth,
    paddingTop: 0,
    flex: 1,
  },
  menuHeader: {
    '@media (min-width:0px) and (orientation: landscape)': {
      height: theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight,
    },
    '@media (min-width:600px)': {
      height: theme.mixins.toolbar['@media (min-width:600px)'].minHeight,
    },
    height: theme.mixins.toolbar.minHeight,
  },
  menuIcon: {
    marginLeft: -8,
  },
  drawerPaper: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
  },
}))
