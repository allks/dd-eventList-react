import React, {Component} from 'react'
import classes from './Events.scss'
import Event from '../../components/Event/Event'
import Categories from '../../components/Categories/Categories'
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
    events: [
      // {
      //   id: 1,
      //   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   description: 'Aliquip in deserunt proident sit. Deserunt magna dolore adipisicing veniam eu qui fugiat et est esse nulla reprehenderit ut proident. Veniam qui laborum veniam velit labore cillum eiusmod consequat. Occaecat amet amet veniam irure eiusmod eu mollit cillum ex ullamco. Laboris irure laboris laborum pariatur reprehenderit culpa ea in sint laborum. Ut cupidatat labore amet incididunt officia commodo laboris minim consequat enim est velit ea.',
      //   data: '12.12.2321',
      //   comments: [
      //     {
      //       id: '1',
      //       author: 'Sagittis',
      //       text: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget.',
      //       date: '12.11.1112'
      //     },
      //     {
      //       id: '2',
      //       author: 'Aliquam',
      //       text: 'Qui id ad sunt voluptate ex mollit excepteur. Irure laboris esse ex ullamco ex in et anim sunt. Enim elit nulla ullamco cupidatat veniam velit. In aliqua ipsum do officia Lorem anim ut in exercitation elit tempor incididunt ex irure.',
      //       date: '10.02.1009'
      //     },
      //     {
      //       id: '3',
      //       author: 'Vivamus',
      //       text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
      //       date: '02.10.2000'
      //     },
      //     {
      //       id: '4',
      //       author: 'Vivamus',
      //       text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
      //       date: '02.10.2000'
      //     },
      //     {
      //       id: '5',
      //       author: 'Vivamus',
      //       text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
      //       date: '02.10.2000'
      //     }
      //   ],
      // },
      // {
      //   id: 2,
      //   title: 'Mollis nunc sed id semper risus in hendrerit gravida rutrum.',
      //   description: 'Esse veniam adipisicing consequat sunt. Culpa sit adipisicing sint ex tempor ad consectetur culpa duis aliquip velit non. Incididunt incididunt qui non eiusmod ex proident cupidatat occaecat Lorem veniam laboris. Voluptate nisi ad Lorem veniam. Sit nostrud incididunt excepteur culpa velit mollit do amet ad exercitation minim. Id non esse nisi commodo nostrud esse esse. Do aliquip dolore officia officia occaecat deserunt cupidatat excepteur id id.',
      //   data: '10.11.1999',
      //   comments: [
      //     {
      //       id: '1',
      //       author: 'Sagittis',
      //       text: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget.',
      //       date: '12.11.1112'
      //     },
      //     {
      //       id: '2',
      //       author: 'Aliquam',
      //       text: 'Qui id ad sunt voluptate ex mollit excepteur. Irure laboris esse ex ullamco ex in et anim sunt. Enim elit nulla ullamco cupidatat veniam velit. In aliqua ipsum do officia Lorem anim ut in exercitation elit tempor incididunt ex irure.',
      //       date: '10.02.1009'
      //     },
      //     {
      //       id: '3',
      //       author: 'Vivamus',
      //       text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
      //       date: '02.10.2000'
      //     }
      //   ],
      // },
      // {
      //   id: 3,
      //   title: 'Turpis egestas maecenas pharetra convallis posuere.',
      //   description: 'Eiusmod cupidatat eiusmod consectetur duis deserunt quis do occaecat. Velit ullamco mollit dolore dolor incididunt. Adipisicing sit laboris excepteur quis velit elit reprehenderit. Dolore proident laboris aliqua ex consequat eiusmod voluptate sit aute fugiat sit consequat eiusmod. Do sit reprehenderit in labore consequat adipisicing consequat labore tempor esse veniam quis.',
      //   data: '06.09.1924',
      //   comments: [
      //     {
      //       id: '1',
      //       author: 'Sagittis',
      //       text: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget.',
      //       date: '12.11.1112'
      //     },
      //     {
      //       id: '2',
      //       author: 'Aliquam',
      //       text: 'Qui id ad sunt voluptate ex mollit excepteur. Irure laboris esse ex ullamco ex in et anim sunt. Enim elit nulla ullamco cupidatat veniam velit. In aliqua ipsum do officia Lorem anim ut in exercitation elit tempor incididunt ex irure.',
      //       date: '10.02.1009'
      //     }
      //   ],
      // },
      // {
      //   id: 4,
      //   title: 'Viverra suspendisse potenti nullam ac tortor vitae.',
      //   description: 'Mollit reprehenderit laborum ut irure id voluptate. Nostrud ea laborum voluptate ut. Veniam ex ea enim in irure enim incididunt laborum pariatur esse voluptate labore quis. Lorem mollit ipsum velit magna veniam mollit cillum pariatur incididunt aute incididunt. Est est velit consequat esse laboris mollit ex. Velit ipsum amet irure aliqua non sint eiusmod occaecat consequat consectetur nostrud minim nulla aute.',
      //   data: '04.10.1923',
      // },
    ]
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
        events
      })
      console.log(events)
    } catch (e) {
      console.log(e)
    }
  }
  

  render() {
    return (
      <React.Fragment>
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
                  index={index}
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
    )
  }
}