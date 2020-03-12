import React from 'react'
import classes from './Nav.scss'
import Logo from '../../components/UI/Logo/Logo'
import Search from '../../components/UI/Search/Search'

export default class Nav extends React.Component {

  render() {
    return (
      <nav className={classes.nav}>
        <div className={classes.wrap}>
          <Logo />
          <ul className={classes.list}>
            <li className={classes.item}>Прошедшие</li>
            <li className={classes.item}>Текущие</li>
            <li className={classes.item}>Близжайшие</li>
          </ul>
          <Search />
        </div>

      </nav>
    )
  }
}