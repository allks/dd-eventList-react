import React from 'react'
import classes from './Nav.scss'

export default class Nav extends React.Component {

  render() {
    return (
      <nav className={classes.nav}>
        <ul>
          <li>Прошедшие</li>
          <li>Текущие</li>
          <li>Близжайшие</li>
        </ul>
      </nav>
    )
  }
}