import React from 'react'
import classes from './EventItem.scss'
import Event from './Event/Event'


const EventItem = props => (
  <ul className={classes.eventItem}>
    {props.comments.map((comment, index) =>{
      return (
        <Event
          comment={comment}
          key={index}
        />
      )
    })}
  </ul>
)

export default EventItem