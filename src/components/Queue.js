import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from './commons/Card'
import Line from './charts/Line'
import MultiLine from './charts/MultiLine'

const Queue = () => (
  <div>
    <Card>
      <Line />
    </Card>
    <Card>
      <MultiLine />
    </Card>
  </div>
)

export default withRouter(Queue)
