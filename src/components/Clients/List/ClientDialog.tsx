import React, {useState, Fragment, ChangeEvent} from 'react'
import i18n from 'i18next'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {createClient} from 'redux-logic/clients'
import {v4} from 'uuid'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ClientDialog: React.SFC<Props> = ({open, setOpen}): JSX.Element => {
  const dispatch = useDispatch()
  const [hasError, setError] = useState('')
  const [client, setClient] = useState('')

  const handleSubmit = (): void => {
    setClient('')
    setOpen(false)
    dispatch(createClient({id: v4(), name: client}))
  }

  const onChangeClient = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setClient(event.currentTarget.value)
    if (event.currentTarget.value) {
      setError('')
    } else {
      setError('Naam is verplicht')
    }
  }

  const getDialogContent = (): JSX.Element => {
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
            error={Boolean(hasError)}
            helperText={hasError}
            value={client}
            onChange={onChangeClient}
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>{i18n.t('clients:cancel')}</Button> */}
          <Button disabled={Boolean(hasError)} onClick={handleSubmit}>
            {i18n.t('clients:send')}
          </Button>
        </DialogActions>
      </Fragment>
    )
  }

  return (
    <div data-testid="feedback">
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{i18n.t('feedback:title')}</DialogTitle>
        {getDialogContent()}
      </Dialog>
    </div>
  )
}
