import React, {Fragment, useCallback, useState} from 'react'
import i18n from 'i18next'
import clsx from 'clsx'
import {Person, Menu as MenuIcon} from '@material-ui/icons'
import {AppBar, IconButton, ListItemText, Menu, MenuItem, Toolbar, Typography, Chip, Divider} from '@material-ui/core'
import {useStyles} from 'components/Navigation/TopBar/styles'

interface TopBarProps {
  isSideMenuOpen: boolean
  showSideMenu: Function
}

export const TopBar = ({isSideMenuOpen, showSideMenu}: TopBarProps): JSX.Element => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleProfileMenuOpen = useCallback(event => setAnchorEl(event.currentTarget), [setAnchorEl])
  const handleMenuClose = useCallback(() => setAnchorEl(null), [setAnchorEl])

  return (
    <Fragment>
      <AppBar position="absolute" className={clsx(classes.appBar, isSideMenuOpen && classes.appBarShift)}>
        <Toolbar>
          <IconButton
            data-testid="side-menu"
            onClick={(e): void => showSideMenu()}
            className={clsx(classes.menuButton, isSideMenuOpen && classes.hide)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            {i18n.t('topbar:title')}
          </Typography>
          <Chip variant="outlined" label={process.env.REACT_APP_ENV} size="small" />
          <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit" data-testid="user-icon">
            <Person />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        // keepMounted
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{disablePadding: true}}
        data-testid="user-menu"
      >
        <MenuItem button={false} divider>
          <ListItemText primary={'Foo'} secondary={'Bar'} />
        </MenuItem>
        <Divider />
        <MenuItem data-testid="close-user-menu" onClick={handleMenuClose} className={classes.noDisplay}></MenuItem> {/* used for testing*/}
      </Menu>
    </Fragment>
  )
}
