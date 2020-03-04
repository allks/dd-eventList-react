import React from 'react'
import classes from './Event.scss'
import {withRouter} from 'react-router-dom'

const Event = props => {
  return (
    <li
      className={classes.event}
      onClick={() => props.history.push('/event/' + props.index)}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <span>Дата публикации:{props.data}</span>
      <span>Комментарии:{props.comments.length}</span>
    </li>
  )
}

export default withRouter(Event)
