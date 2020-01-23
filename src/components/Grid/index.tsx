import React from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import Grid, {GridSpacing} from '@material-ui/core/Grid'
//import FormLabel from '@material-ui/core/FormLabel'
//import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
)

export default function SpacingGrid(): JSX.Element {
  const [spacing] = React.useState<GridSpacing>(2)
  //const spacing = 2
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
              Beetje tekst
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
