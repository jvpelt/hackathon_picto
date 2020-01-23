import React, {Fragment} from 'react'
import i18n from 'i18next'
import {Link, match} from 'react-router-dom'
import clsx from 'clsx'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  SvgIcon,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Divider,
} from '@material-ui/core'
import {useStyles} from 'components/Navigation/SideMenu/styles'

export enum Routes {
  Clients = '/clients',
}

interface NavItemProps {
  route: Routes
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
      text: i18n.t('sidebar:clients'),
      match,
    },
  ]

  const renderListItem = ({route, text, match}: NavItemProps): JSX.Element | null => {
    const iconWrapper = <span></span>
    // let iconWrapper = (
    //   <SvgIcon>
    //     <FontAwesomeIcon icon={icon} />
    //   </SvgIcon>
    // )
    // if (badgeCount) {
    //   iconWrapper = (
    //     <Badge badgeContent={badgeCount} color="primary">
    //       {iconWrapper}
    //     </Badge>
    //   )
    // }
    return (
      <ListItem button component={Link} to={route} selected={match.url.startsWith(route)}>
        <ListItemAvatar>
          <IconButton className={classes.menuIcon}>{iconWrapper}</IconButton>
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
              <SvgIcon>{/* <FontAwesomeIcon icon={faAngleLeft} /> */}</SvgIcon>
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
