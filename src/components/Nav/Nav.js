import React from 'react'
import classes from './Nav.scss'

export default class Nav extends React.Component {

  render() {
    return (
      <nav className={classes.wrap}>
        <ul className={classes.list}>
          <li className={classes.item}>Прошедшие</li>
          <li className={classes.item}>Текущие</li>
          <li className={classes.item}>Близжайшие</li>
        </ul>
      </nav>
    )
  }
}