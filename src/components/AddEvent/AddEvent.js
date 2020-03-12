import React from 'react'
import classes from './AddEvent.scss'
import Title from '../../components/UI/Title/Title'

export default class AddEvent extends React.Component {

    goToBack = () => {
      this.props.history.push({
        pathname: '/'
      })
    }
  
    render() {
      return (
        <React.Fragment>
          <button onClick={this.goToBack}>go to back</button>
          <Title>Создание мероприятия</Title>
          <form className={classes.wrap}>
            <label for="title">Заголовок:</label>
            <input
              type="text"
              id="title"
              placeholder="Placeholder..."
            />
            <label for="description">Описание:</label>
            <input 
              type="text"
              id="description"
              placeholder="Placeholder..."
            />
            <label for="date">Дата</label>
            <input
              type="date"
              id="date"
            />
            <button type="button">Создать</button>
          </form>
        </React.Fragment>
      )
    }
  }