import React from 'react'
import {Grid} from '@material-ui/core'
import {useStyles} from 'components/shared/SplitView/styles'

interface Props {
  master: JSX.Element
  detail: JSX.Element
}

export const SplitView: React.SFC<Props> = ({master, detail}) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.fullHeight}>
        {master}
      </Grid>
      <Grid item xs={8} className={classes.fullHeight}>
        {detail}
      </Grid>
    </Grid>
  )
}
