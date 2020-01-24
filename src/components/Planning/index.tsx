import React, {Fragment} from 'react'
import {DayPlanner} from 'components/Planning/DayPlanner'
import {PictoSelection} from 'components/Planning/PictoSelection'
import {useSelector} from 'react-redux'
import {StoreState} from 'definitions'

interface Props {
  clientId?: string
}

export const PlanningContainer: React.SFC<Props> = ({clientId}): JSX.Element | null => {
  const timeslots = useSelector(({planningState: {timeslots}}: StoreState) => timeslots)

  if (!clientId) return null

  return (
    <Fragment>
      <PictoSelection timeslots={timeslots} clientId={clientId} />
      <DayPlanner clientId={clientId} timeslots={timeslots} />
    </Fragment>
  )
}
