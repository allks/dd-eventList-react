import React from 'react'
import classes from './Event.scss'

const Event = props => {
  const cls = [classes.event]

  if (props.state) {
    cls.push(classes[props.state])
  }

  return (
    <li className={cls.join(' ')}>
      <h2>{props.comment.author}</h2>
      <p>{props.comment.text}</p>
      <span>{props.comment.date}</span>
    </li>
  )
}

export default Event