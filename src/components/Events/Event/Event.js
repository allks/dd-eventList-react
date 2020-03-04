import React from 'react'
import classes from './Event.scss'
import {withRouter} from 'react-router-dom'

const Event = props => {
  return (
    <div
      className={classes.event}
      onClick={() => props.history.push('/event/' + props.index)}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default withRouter(Event)
