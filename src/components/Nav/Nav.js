import React from 'react'
import classes from './Nav.scss'

export default class Nav extends React.Component {

  render() {
    return (
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>Прошедшие</li>
          <li className={classes.navItem}>Текущие</li>
          <li className={classes.navItem}>Близжайшие</li>
        </ul>
      </nav>
    )
  }
}