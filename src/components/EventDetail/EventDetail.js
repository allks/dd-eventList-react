import React from 'react'
import classes from './EventDetail.scss'

export default class EventDetail extends React.Component {
  goToBack = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() { 
    console.log(this.props)
    return (

      <div className={classes.wrap}>
        <button
          className={classes.toBack}
          onClick={this.goToBack}
        >
          Назад
        </button>
        <h3>{this.props.match.params.index}</h3>
        <p></p>
      </div>
    )

  } 
}