import {makeStyles} from '@material-ui/core'
import {green, red, amber, lightBlue, blue, grey, yellow, purple, teal, brown} from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  primary: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  secondary: {
    display: 'flex',
    alignItems: 'center',
  },
  separator: {
    marginLeft: 4,
    marginRight: 4,
  },
  green: {
    borderColor: green[500],
    color: green[500],
  },
  red: {
    borderColor: red[500],
    color: red[500],
  },
  amber: {
    borderColor: amber[500],
    color: amber[500],
  },
  lightBlue: {
    borderColor: lightBlue[500],
    color: lightBlue[500],
  },
  blue: {
    borderColor: blue[500],
    color: blue[500],
  },
  yellow: {
    borderColor: yellow[500],
    color: yellow[500],
  },
  grey: {
    borderColor: grey[500],
    color: grey[500],
  },
  purple: {
    borderColor: purple[500],
    color: purple[500],
  },
  teal: {
    borderColor: teal[500],
    color: teal[500],
  },
  brown: {
    borderColor: brown[500],
    color: brown[500],
  },
}))
