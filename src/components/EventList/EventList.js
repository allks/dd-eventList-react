import React from 'react'
import classes from './EventList.scss'
import EventItem from './EventItem/EventItem'

const EventList = props => (
  <div className={classes.eventList}>
    <div className={classes.title}>{props.title}</div>
    <div className={classes.description}>{props.description}</div>
    <div className={classes.date}>{props.data}</div>
    <div className={classes.comment}>Комментарии: {props.comments.length}</div>
    <EventItem 
      comments={props.comments}
  />
  </div>
)

export default EventList