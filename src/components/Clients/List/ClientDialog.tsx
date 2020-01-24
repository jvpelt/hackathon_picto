import React, {useState, Fragment, useCallback} from 'react'
import i18n from 'i18next'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'
// import {history} from 'utils'
import {Loading} from 'components/shared/Loading'
import {useDispatch} from 'react-redux'
import {createClient} from 'redux-logic/clients'
import {Client} from 'definitions'

const initStateClient: Client = {id: '', name: ''}

interface ClientCreateState {
  openDialog: boolean
  isSaving: boolean
  hasError: boolean
}

interface Props {
  open: boolean
}

export const ClientDialog: React.SFC<Props> = ({open}): JSX.Element => {
  const initStateClientCreateState: ClientCreateState = {openDialog: open, isSaving: false, hasError: false}
  const dispatch = useDispatch()
  const [clientCreateState, setClientCreateState] = useState<ClientCreateState>(initStateClientCreateState)
  const [client, setClient] = useState<Client>(initStateClient)

  const handleSubmit = useCallback((): void => {
    setClient({...initStateClient})
    dispatch(createClient({id: client.id, name: client.name}))
    setClientCreateState({openDialog: false, isSaving: true, hasError: clientCreateState.hasError})
  }, [client.id, client.name, clientCreateState.hasError, dispatch])

  const getDialogContent = (): JSX.Element => {
    if (clientCreateState.isSaving) {
      return (
        <DialogContent>
          <Loading message={i18n.t('clients:saving')} />
        </DialogContent>
      )
    }
    return (
      <Fragment>
        <DialogContent>
          <DialogContentText>{i18n.t('feedback:placeholder')}</DialogContentText>
          <TextField
            id="firstName"
            name="firstName"
            label={i18n.t('clients:firstName')}
            autoFocus
            fullWidth
            multiline
            rows="1"
            margin="dense"
            type="text"
            variant="outlined"
            error={clientCreateState.hasError}
            helperText={i18n.t('clients:required')}
            value={client.name}
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>{i18n.t('clients:cancel')}</Button> */}
          <Button onClick={handleSubmit}>{i18n.t('clients:send')}</Button>
        </DialogActions>
      </Fragment>
    )
  }

  return (
    <div data-testid="feedback">
      <Dialog open={clientCreateState.openDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{i18n.t('feedback:title')}</DialogTitle>
        {getDialogContent()}
      </Dialog>
    </div>
  )
}
