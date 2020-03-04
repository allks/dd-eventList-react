import React from 'react'
import classes from './Event.scss'
import {withRouter} from 'react-router-dom'

const Event = props => {
  return (
    <li
      className={classes.event}
      onClick={() => props.history.push('/event/' + props.index)}
    >
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
      <span className={classes.data}>Дата публикации: {props.data}</span>
      <span className={classes.comments}>Комментарии: {props.comments.length}</span>
      <button className={classes.remove}>Удалить</button>
    </li>
  )
}

export default withRouter(Event)
