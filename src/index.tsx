import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import i18n from 'i18next'
import {locales} from 'locales'
import {createMuiTheme} from '@material-ui/core'
import {MuiThemeProvider, CssBaseline} from '@material-ui/core'
import {blue} from '@material-ui/core/colors'
import {setupStore} from 'redux-logic'
import {ErrorBoundary} from 'components/ErrorBoundary'
import {ClientApp} from 'components/ClientApp'
import {history} from 'utils'

export const init = async (): Promise<void> => {
  // Initialize locales
  await i18n.init({
    lng: 'nl',
    fallbackLng: 'nl',
    resources: locales,
  })

  // MUI Theme
  const theme = createMuiTheme({
    palette: {primary: blue},
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })

  // Setup redux store
  const store = setupStore()

  ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <CssBaseline />
            <ClientApp />
          </Router>
        </MuiThemeProvider>
      </ErrorBoundary>
    </Provider>,
    document.querySelector('#root'),
  )
}

init()
