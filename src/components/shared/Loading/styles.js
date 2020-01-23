import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  loading: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      textAlign: 'center',
    }),
  },
  paper: {
    marginTop: 16,
    marginBottom: 16,
  },
  loadingText: {
    marginTop: 16,
  },
}))
