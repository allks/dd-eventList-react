import React, {Component} from 'react'
import classes from './AddEvent.scss'
import Title from '../../components/UI/Title/Title'
import Axios from 'axios';

export default class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      description: '',
      date: ''
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }


    goToBack = () => {
      this.props.history.push({
        pathname: '/'
      })
    }

    handleTitle(event) {
      this.setState({title: event.target.value});
    }

    handleCategory(event) {
      this.setState({category: event.target.value});
    }

    handleDescription(event) {
      this.setState({description: event.target.value});
    }

    handleDate(event) {
      this.setState({date: event.target.value});
    }

    submitEventHandler = async event => {
      event.preventDefault();
      try {
        await Axios.post('https://event-react-1bb48.firebaseio.com/events.json', this.state)
        this.setState({
          title: '',
          category: '',
          description: '',
          date: ''
        })
      } catch (e) {
        console.log(e)
      }
    }
  
    render() {
      return (
        <div className={classes.create}>
        <button
          className={classes.toBack}
          onClick={this.goToBack}
        >
          Назад
        </button>
          <Title>Создание мероприятия</Title>
          <form
            onSubmit={this.submitHandler}
            className={classes.wrap}
          >
            <label htmlFor="title">Заголовок:</label>
            <input
              type="text"
              id="title"
              placeholder="Placeholder..."
              value={this.state.title}
              onChange={this.handleTitle}
              
            />
            <label htmlFor="category">Категория:</label>
            <input
              type="text"
              id="category"
              placeholder="Placeholder..."
              value={this.state.category}
              onChange={this.handleCategory}
            />
            <label htmlFor="description">Описание:</label>
            <textarea
              id="description"
              placeholder="Placeholder..."
              value={this.state.description}
              onChange={this.handleDescription}
            />
            <label htmlFor="date">Дата</label>
            <input
              type="date"
              id="date"
              value={this.state.date}
              onChange={this.handleDate}
            />
            <button
              onClick={this.submitEventHandler}
              type="button"
              className={classes.btnCreate}
            >Создать</button>
          </form>
        </div>
      )
    }
  }