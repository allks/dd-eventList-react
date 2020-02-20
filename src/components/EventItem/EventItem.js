import React from 'react'
import classes from './EventItem.scss'

const EventItem = props => (
  <div className={classes.eventItem}>
    <div className={classes.title}>{props.title}</div>
    <div className={classes.description}>{props.description}</div>
  </div>
)

export default EventItem