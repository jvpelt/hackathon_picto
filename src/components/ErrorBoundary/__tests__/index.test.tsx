import React from 'react'
import {fireEvent} from '@testing-library/react'
import * as sentry from '@sentry/browser'
import {ErrorBoundary} from 'components/ErrorBoundary'
import {render, setupLocales} from 'test-utils'

beforeAll(async () => await setupLocales())

const mockCaptureException = jest.spyOn(sentry, 'captureException').mockImplementation((): string => 'ok')
const mockWithScope = jest.spyOn(sentry, 'withScope').mockImplementation()

interface BombProps {
  shouldThrow?: boolean
}
const Bomb = (props: BombProps): JSX.Element => {
  if (props.shouldThrow) {
    throw new Error('💣')
  } else {
    return <div>No bomb :))</div>
  }
}

let consoleErrorSpy: jest.SpyInstance
let windowReloadSpy: jest.SpyInstance
beforeEach((): void => {
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation((): null => null)
  windowReloadSpy = jest.spyOn(window.location, 'reload').mockImplementation((): null => null)
})

afterEach((): void => {
  consoleErrorSpy.mockClear()
  windowReloadSpy.mockClear()
  mockWithScope.mockClear()
})

it('does not call sentry and renders the child', (): void => {
  const {container} = render(
    <ErrorBoundary>
      <Bomb shouldThrow={false} />
    </ErrorBoundary>,
  )
  expect(container).not.toHaveTextContent(/kritieke fout/i)
})

it('calls Sentry and renders that there was a problem', (): void => {
  // render with error
  const {container, getByText} = render(
    <ErrorBoundary>
      <Bomb shouldThrow={true} />
    </ErrorBoundary>,
  )

  expect(container).toHaveTextContent(/kritieke fout/i)
  expect(consoleErrorSpy).toHaveBeenCalledTimes(2)

  // configure our callback of withScope
  const withScopeCallback = mockWithScope.mock.calls[0][0]
  const scope = ({setExtras: jest.fn()} as unknown) as sentry.Scope
  withScopeCallback(scope)

  // these are the values
  const error = expect.any(Error)
  const info = {componentStack: expect.stringContaining('Bomb')}

  // scope set Extras has been called with the component Stack
  expect(scope.setExtras).toHaveBeenCalledTimes(1)
  expect(scope.setExtras).toHaveBeenCalledWith(info)

  // capture exceptions has been called with the error
  expect(mockCaptureException).toHaveBeenCalledTimes(1)
  expect(mockCaptureException).toHaveBeenCalledWith(error)

  consoleErrorSpy.mockClear()
  mockCaptureException.mockClear()

  // restart the app
  fireEvent.click(getByText(/herstart/i))
  expect(mockCaptureException).not.toHaveBeenCalled()
  expect(consoleErrorSpy).not.toHaveBeenCalled()
  expect(windowReloadSpy).toHaveBeenCalledTimes(1)
})
