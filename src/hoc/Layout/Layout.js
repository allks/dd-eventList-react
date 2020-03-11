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
        <Switch>
          <Route path="/event/:index" component={EventDetail} />
          <Route path="/add-event" component={AddEvent} />
          <Route path="/" component={Events} />
          <Redirect to={'/'} />
        </Switch>
      </div>
    )
  }
}

export default Layout