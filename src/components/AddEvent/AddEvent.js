import React, {Component} from 'react'
import classes from './AddEvent.scss'
import Title from '../../components/UI/Title/Title'

export default class AddEvent extends Component {

    goToBack = () => {
      this.props.history.push({
        pathname: '/'
      })
    }

    submitHandler = event => {
      event.preventDefault()
    }

    createEventHandler = () => {

    }
  
    render() {
      return (
        <div className={classes.create}>
          <button onClick={this.goToBack}>go to back</button>
          <Title>Создание мероприятия</Title>
          <form
            onSubmit={this.submitHandler}
            className={classes.wrap}
          >
            <label for="title">Заголовок:</label>
            <input
              type="text"
              id="title"
              placeholder="Placeholder..."
            />
            <label for="category">Категория:</label>
            <input
              type="text"
              id="category"
              placeholder="Placeholder..."
            />
            <label for="description">Описание:</label>
            <textarea
              id="description"
              placeholder="Placeholder..."
            />
            <label for="date">Дата</label>
            <input
              type="date"
              id="date"
            />
            <button
              onClick={this.createEventHandler}
              type="button"
              className={classes.btnCreate}
            >Создать</button>
          </form>
        </div>
      )
    }
  }