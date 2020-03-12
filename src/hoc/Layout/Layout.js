import React, {Component} from 'react'
import classes from './Layout.scss'
import {Route, Switch, Redirect} from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Events from '../../containers/Events/Events'
import EventDetail from '../../components/EventDetail/EventDetail'
import AddEvent from '../../components/AddEvent/AddEvent'


class Layout extends Component {
  render() {
    return (
      <div className={classes.layout}>
        <Nav />
        <div className={classes.maincontent}>
          <Switch>
            <Route path="/event/:index" component={EventDetail} />
            <Route path="/add-event" component={AddEvent} />
            <Route path="/" component={Events} />
            <Redirect to={'/'} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Layout