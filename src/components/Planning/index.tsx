import React, {Fragment} from 'react'
import {DayPlanner} from 'components/Planning/DayPlanner'
import {PictoSelection} from 'components/Planning/PictoSelection'

interface Props {
  clientId?: string
}

export const PlanningContainer: React.SFC<Props> = ({clientId}): JSX.Element | null => {
  if (!clientId) return null

  return (
    <Fragment>
      <PictoSelection />
      <DayPlanner clientId={clientId} />
    </Fragment>
  )
}
