import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchClients} from 'redux-logic/clients'
import {SplitView} from 'components/shared/SplitView'
import {ClientListSelection} from 'components/Clients/List'
import {match} from 'react-router-dom'
import {StoreState} from 'definitions'
import {PlanningContainer} from 'components/Planning'

interface Props {
  match: match<{clientId: string | undefined}>
}

export const Clients: React.SFC<Props> = ({match}): JSX.Element => {
  const dispatch = useDispatch()
  const clients = useSelector(({clientState: {clients}}: StoreState) => clients)
  const isLoading = useSelector(({clientState: {meta}}: StoreState) => meta.isLoading)

  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])

  const selectedId = match.params.clientId
  return (
    <SplitView
      master={
        <ClientListSelection
          clients={Object.keys(clients)
            .map(k => clients[k])
            .sort((a, b) => a.id.localeCompare(b.id))}
          isLoading={isLoading}
          selectedId={selectedId}
        />
      }
      detail={<PlanningContainer clientId={selectedId} />}
    />
  )
}
