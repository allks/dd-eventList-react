import React from 'react'
import classes from './Event.scss'

const Event = props => {
  const cls = [classes.event]

  if (props.state) {
    cls.push(classes[props.state])
  }

  return (
    <li className={cls.join(' ')}>
      <h3>{props.comment.author}</h3>
      <p>{props.comment.text}</p>
      <span>{props.comment.date}</span>
    </li>
  )
}

export default Event