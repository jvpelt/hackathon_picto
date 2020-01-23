import React, {Suspense, useState, useEffect} from 'react'
import i18n from 'i18next'
import {Route, Switch, Redirect} from 'react-router-dom'
import {loginWithNothing} from 'stitch'
import {useStyles} from 'components/App/styles'
import {NavigationContainer} from 'components/Navigation'
import {Loading} from 'components/shared/Loading'
import {Routes} from 'definitions'
import SpacingGrid from 'components/Grid'

export const ClientApp = (): JSX.Element => {
  const classes = useStyles()
  const [stitchReady, setStitchReady] = useState(false)

  useEffect((): void => {
    const loginToStitch = async (): Promise<void> => {
      try {
        await loginWithNothing()
        setStitchReady(true)
      } catch (err) {
        console.log(err)
      }
    }
    if (!stitchReady) {
      loginToStitch()
    }
  }, [stitchReady])

  if (!stitchReady) {
    return <Loading message={i18n.t('app:loading')} />
  }

  // Lazy loading --> create chunks as nobody needs the whole application

  return (
    <div data-testid="main-app" className={classes.root}>
      <Route path="*" render={(routeProps): JSX.Element => <NavigationContainer {...routeProps} />} />
      <div className={classes.content}>
        <Suspense fallback={<Loading message={i18n.t('generic:loadingComponent')} />}>
          <Switch>
            <Route path={`${Routes.Clients}/:clientId?`} component={(): JSX.Element => <div>Client</div>} />
            <Route>
              <Redirect to={Routes.Clients} />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <div>
        <SpacingGrid />
      </div>
    </div>
  )
}
