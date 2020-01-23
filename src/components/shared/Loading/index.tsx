import React from 'react'
import {CircularProgress, Typography} from '@material-ui/core'
import {useStyles} from 'components/shared/Loading/styles'

interface LoadingProps {
  message: string
}

export const Loading = ({message}: LoadingProps): JSX.Element => {
  const classes = useStyles()

  return (
    <div data-testid="loading" className={classes.loading}>
      <CircularProgress size={50} />
      <Typography variant="body2" className={classes.loadingText}>
        {message}
      </Typography>
    </div>
  )
}
