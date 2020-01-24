import React, {Fragment} from 'react'
import i18n from 'i18next'
import {Link, match} from 'react-router-dom'
import clsx from 'clsx'
import {Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Typography, Divider} from '@material-ui/core'
import {AssignmentInd, ChevronLeft, BurstMode} from '@material-ui/icons'
import {useStyles} from 'components/Navigation/SideMenu/styles'
import {Routes} from 'definitions'

interface NavItemProps {
  route: Routes
  icon: JSX.Element
  text: string
  match: match
}

interface Props {
  isSideMenuOpen: boolean
  hideSideMenu: Function
  match: match
}

export const SideMenu: React.SFC<Props> = ({isSideMenuOpen, hideSideMenu, match}): JSX.Element => {
  const classes = useStyles()

  const navItems: NavItemProps[] = [
    {
      route: Routes.Clients,
      icon: <AssignmentInd />,
      text: i18n.t('sidebar:clients'),
      match,
    },
    {
      route: Routes.Pictos,
      icon: <BurstMode />,
      text: i18n.t('sidebar:pictos'),
      match,
    },
  ]

  const renderListItem = ({route, text, icon, match}: NavItemProps): JSX.Element | null => {
    return (
      <ListItem key={route} button component={Link} to={route} selected={match.url.startsWith(route)}>
        <ListItemAvatar>
          <IconButton className={classes.menuIcon}>{icon}</IconButton>
        </ListItemAvatar>
        <ListItemText primary={text} />
      </ListItem>
    )
  }

  const drawerContent = (
    <Fragment>
      <List component="nav" className={classes.menuList}>
        <ListItem divider className={classes.menuHeader}>
          <ListItemText>
            <Typography variant="h6">{i18n.t('sidebar:title')}</Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton data-testid="side-menu-exp" onClick={(e): void => hideSideMenu()} className={classes.menuIcon}>
              <ChevronLeft />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {navItems.map(item => renderListItem(item))}
        <Divider />
      </List>
    </Fragment>
  )

  return (
    <Drawer variant="permanent" classes={{paper: clsx(classes.drawerPaper, !isSideMenuOpen && classes.drawerPaperClose)}} open={isSideMenuOpen}>
      {drawerContent}
    </Drawer>
  )
}

export default SideMenu
