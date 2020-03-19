import React from 'react'
import classes from './Event.scss'
import {withRouter} from 'react-router-dom'

const Event = props => {
  return (
    <li
      className={classes.item}
      onClick={() => props.history.push('/event/' + props.index)}
    >
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
      <span className={classes.data}>Дата публикации: {props.date}</span>
      <span className={classes.comments}>Комментарии: {
        props.comments ? `${props.comments.length}` : 0
      }</span>
      
      <button className={classes.remove}>Удалить</button>
    </li>
  )
}

export default withRouter(Event)
