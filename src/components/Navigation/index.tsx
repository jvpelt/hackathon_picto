import React, {Fragment, useState, useCallback} from 'react'
import {SideMenu} from 'components/Navigation/SideMenu'
import {TopBar} from 'components/Navigation/TopBar'
import {match} from 'react-router'

interface Props {
  match: match
}

export const NavigationContainer: React.SFC<Props> = ({match}): JSX.Element => {
  const [isSideMenuOpen, setSideMenuState] = useState(false)

  const handleToggleSideMenu = useCallback(() => {
    setSideMenuState(isSideMenuOpen ? false : true)
  }, [isSideMenuOpen])

  return (
    <Fragment>
      <TopBar isSideMenuOpen={isSideMenuOpen} showSideMenu={handleToggleSideMenu} />
      <SideMenu isSideMenuOpen={isSideMenuOpen} hideSideMenu={handleToggleSideMenu} match={match} />
    </Fragment>
  )
}
