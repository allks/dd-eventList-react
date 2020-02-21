import React, {Component} from 'react'
import classes from './Layout.scss'

class Layout extends Component {
  render() {
    return (
      <div className={classes.layout}>
        <nav className={classes.nav}>
          <ul className={classes.navList}>
            <li className={classes.navItem}>Прошедшие</li>
            <li className={classes.navItem}>Текущие</li>
            <li className={classes.navItem}>Близжайшие</li>
          </ul>
        </nav>
        <main className={classes.main}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout