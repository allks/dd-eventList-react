import React, {Component} from 'react'
import classes from './Events.scss'
import Event from '../../components/Event/Event'
import Categories from '../../components/Categories/Categories'
import Loader from '../../components/UI/Loader/Loader'
import Axios from 'axios'

// const config = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: ""
// }

export default class Events extends Component {
  state = {
    loading: true,
    events: [],
  }
  
  goToAdd = () => {
    this.props.history.push({
      pathname: '/add-event'
    })
  }

  async componentDidMount() {
    try {
      const response = await Axios.get('https://event-react-1bb48.firebaseio.com/events.json')
      // console.log(response.data)
      const events = []
      const { data } = response
      for (const id in data) {
        events.push({
          ...data[id],
          id,
        })
      }
      this.setState({
        events,
        loading: false
      })
      console.log(events)
    } catch (e) {
      console.log(e)
    }
  }
  

  render() {
    return (
      <React.Fragment>
        {
          this.state.loading
          ? <Loader />
          : <React.Fragment>
            <div className={classes.main}>
              <div className={classes.btnSelections}>
                <button
                  className={classes.addEvent}
                  onClick={this.goToAdd} 
                >Добавить событие</button>
                <button className={classes.sort}>Сортировать</button>
              </div>
              <ul className={classes.list}>
                {this.state.events.map((event, index) => {
                  return (
                    <Event
                      key={index}
                      index={event.id}
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      comments={event.comments}
                    />
                  )
                })}
              </ul>
            </div>
            <div className={classes.aside}>
              <h2 className={classes.subTitle}>Категории</h2>
              <ul className={classes.CatList}>
                {this.state.events.map((event, key) => {
                  return (
                    <Categories
                      key={key}
                      category={event.category}
                    />
                  )
                })}
              </ul>
            </div>
      </React.Fragment>
        }

      </React.Fragment>
    )
  }
}