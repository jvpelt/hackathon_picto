import React from 'react'
// import i18n from 'i18next'
import {ListItem, ListItemText, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {useStyles} from 'components/Clients/List/styles'
import {Client, Routes} from 'definitions'

interface Props {
  client: Client
  showDivider: boolean
  selected: boolean
}

export const ClientListItemComp: React.SFC<Props> = ({client, showDivider, selected}): JSX.Element => {
  const classes = useStyles()

  const primary = (): JSX.Element => {
    return (
      <React.Fragment>
        <div className={classes.primary}>
          <Typography variant="h6">{client.name}</Typography>
          <Typography variant="h6" className={classes.separator} />
          <Typography variant="h6" color="textSecondary" noWrap></Typography>
        </div>
      </React.Fragment>
    )
  }

  // const someBatch = (
  //   <div className={classes.secondary}>
  //     <Grid container spacing={1}>
  //       <Grid item>
  //         <Chip size="small" variant="outlined" label="durp" />
  //       </Grid>
  //     </Grid>
  //   </div>
  // )

  // const secondary = (
  //   <div className={classes.secondary}>
  //     <Grid container spacing={1}>
  //       {someBatch}
  //     </Grid>
  //   </div>
  // )

  return (
    <ListItem button divider={showDivider} data-testid={client.id} selected={selected} component={Link} to={`${Routes.Clients}/${client.id}`}>
      <ListItemText primary={primary()} disableTypography />
    </ListItem>
  )
}
