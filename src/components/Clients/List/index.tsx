import React, {useState, useCallback} from 'react'
//import {useDispatch} from 'react-redux'
import i18n from 'i18next'
import {List, ListItem, ListItemText, Paper, Button} from '@material-ui/core'
import {AutoSizer, List as VirtualizedList, CellMeasurer, CellMeasurerCache} from 'react-virtualized'
import {ClientListItemComp} from 'components/Clients/List/ClientListItem'
import {Loading} from 'components/shared/Loading'
import {useStyles} from 'components/Clients/List/styles'
import {Client, StoreState} from 'definitions'
//import {createClientDialog} from 'redux-logic/clients'
import {ClientDialog} from 'components/Clients/List/ClientDialog'
import {useSelector} from 'react-redux'

interface Props {
  isLoading: boolean
  clients: Client[]
  selectedId: string | undefined
}

const ClientList: React.SFC<Props> = ({isLoading, clients, selectedId}): JSX.Element => {
  const classes = useStyles()

  const [cache] = useState(
    new CellMeasurerCache({
      defaultHeight: 68,
      fixedWidth: true,
    }),
  )

  const rowRenderer = useCallback(
    ({index, key, parent, style}) => {
      const client = clients[index]
      return (
        <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
          <div key={key} style={style}>
            <ClientListItemComp client={client} showDivider={index !== clients.length - 1} selected={client.id === selectedId} />
          </div>
        </CellMeasurer>
      )
    },
    [cache, clients, selectedId],
  )

  if (isLoading) {
    return <Loading message={i18n.t('clients:loading')} />
  }

  if (clients.length === 0) {
    return (
      <List className={classes.content}>
        <ListItem>
          <ListItemText primary={i18n.t('clients:noResult')} />
        </ListItem>
      </List>
    )
  }

  return (
    <List disablePadding className={classes.content}>
      <AutoSizer>
        {({height, width}): JSX.Element => {
          return (
            <VirtualizedList
              tabIndex={null}
              deferredMeasurementCache={cache}
              height={height}
              rowCount={clients.length}
              rowHeight={cache.rowHeight}
              rowRenderer={rowRenderer}
              width={width}
              clients={clients}
            />
          )
        }}
      </AutoSizer>
    </List>
  )
}

export const ClientListSelection: React.SFC<Props> = ({isLoading, clients, selectedId}): JSX.Element => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const isSaving = useSelector(({clientState: {meta}}: StoreState) => meta.isSaving)
  if (isSaving) {
    return <Loading message={i18n.t('clients:saving')} />
  }

  return (
    <Paper className={classes.paper}>
      <ListItem>
        <Button fullWidth variant="outlined" color="primary" onClick={(): void => setOpen(true)}>
          {i18n.t('clients:createClient')}
        </Button>
        <ClientDialog open={open} setOpen={setOpen} />
      </ListItem>
      <ClientList clients={clients} isLoading={isLoading} selectedId={selectedId} />
    </Paper>
  )
}
