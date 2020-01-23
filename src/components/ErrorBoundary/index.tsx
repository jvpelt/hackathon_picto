import i18n from 'i18next'
import React, {PureComponent, ErrorInfo} from 'react'
import {history} from 'utils'
import 'components/ErrorBoundary/style.css'

// This component will catch all JavaScript errors
// When this happens, we show an error view which lets the user restart the application
// To make sure this component will always properly render in case of an error,
// we do not use any modules or other components here.

// NOTE: This component is still written as a class, because there are no hooks
// available yet for `componentDidCatch`
// See: https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes
interface AppProps {
  children: JSX.Element
}

interface AppState {
  error: Error | null
}

export class ErrorBoundary extends PureComponent<AppProps, AppState> {
  public state: Readonly<AppState> = {
    error: null,
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({error})
  }

  private handleRestart = (): void => {
    history.push('/')
    window.location.reload()
  }

  public render(): JSX.Element {
    const {children} = this.props
    const {error} = this.state

    if (error) {
      return (
        <div style={{textAlign: 'center'}}>
          <div style={{display: 'inline-block'}}>
            <h1>{i18n.t('errorboundary:title')}</h1>
            <div>{i18n.t('errorboundary:body')}</div>
            <div className="error-message">{error.message}</div>
            <br></br>
            <button className="restart-button" onClick={this.handleRestart}>
              {i18n.t('errorboundary:tryAgain')}
            </button>
          </div>
        </div>
      )
    } else {
      return children
    }
  }
}
