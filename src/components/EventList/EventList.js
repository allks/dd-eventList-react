import React from 'react'
import classes from './EventList.scss'
import EventItem from './EventItem/EventItem'

const EventList = props => (
  <div className={classes.eventList}>
    <div className={classes.event}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.date}>Дата публикации: {props.data}</div>
      <div className={classes.comment}>Комментарии: {props.comments.length}</div>
    </div>
    <h2>Комментарии:</h2>
    <EventItem 
      comments={props.comments}
    />
  </div>
)

export default EventList