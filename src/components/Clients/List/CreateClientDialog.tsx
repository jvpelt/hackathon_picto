import React, {useState, ChangeEvent, Fragment, useCallback} from 'react'
import i18n from 'i18next'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'
import {history} from 'utils'
import {Loading} from 'components/shared/Loading'
import {useDispatch} from 'react-redux'
import {createClient} from 'redux-logic/clients'
import {idText} from 'typescript'

interface Client {
  id: string
  firstName: string
  lastName: string
}

const initState: Client = {id: '', firstName: '', lastName: ''}

export const Feedback: React.SFC = (): JSX.Element => {
  const dispatch = useDispatch()
  const [client, setClient] = useState<Client>(initState)

  const handleSubmit = useCallback((): void => {
    setClient({...initState, isSaving: true})
    dispatch(createClient({id: client.id, firstName: client.firstName, lastName: client.lastName}))
  }, [client.firstName, client.id, client.lastName, dispatch])

  const getDialogContent = (): JSX.Element => {
    if (client.isSaving) {
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
            error={client.hasError}
            helperText={i18n.t('clients:required')}
            value={client.firstName}
          />
          <TextField
            id="lastName"
            name="lastName"
            label={i18n.t('clients:lastName')}
            autoFocus
            fullWidth
            multiline
            rows="1"
            margin="dense"
            type="text"
            variant="outlined"
            error={client.hasError}
            helperText={i18n.t('clients:required')}
            value={client.lastName}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{i18n.t('clients:cancel')}</Button>
          <Button onClick={handleSubmit}>{i18n.t('clients:send')}</Button>
        </DialogActions>
      </Fragment>
    )
  }

  return (
    <div data-testid="feedback">
      <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{i18n.t('feedback:title')}</DialogTitle>
        {getDialogContent()}
      </Dialog>
    </div>
  )
}
