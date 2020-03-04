import React from 'react'
import classes from './EventDetail.scss'

export default class EventDetail extends React.Component {

  goToBack = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div className={classes.eventDetail}>
        <button onClick={this.goToBack}>go to back</button>
        <h3>{this.props.match.params.index}</h3>
      </div>
    )
  }
}