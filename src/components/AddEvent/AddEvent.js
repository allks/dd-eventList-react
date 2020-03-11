import React from 'react'
import classes from './AddEvent.scss'

export default class AddEvent extends React.Component {

    goToBack = () => {
      this.props.history.push({
        pathname: '/'
      })
    }
  
    render() {
      return (
        <div className={classes.wrap}>
            <h2>Страница добавления мероприятия</h2>
        </div>
      )
    }
  }