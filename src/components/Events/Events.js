import React, {Component} from 'react'
import classes from './Events.scss'
import Event from './Event/Event'

export default class Events extends Component {
  state = {
    events: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Aliquip in deserunt proident sit. Deserunt magna dolore adipisicing veniam eu qui fugiat et est esse nulla reprehenderit ut proident. Veniam qui laborum veniam velit labore cillum eiusmod consequat. Occaecat amet amet veniam irure eiusmod eu mollit cillum ex ullamco. Laboris irure laboris laborum pariatur reprehenderit culpa ea in sint laborum. Ut cupidatat labore amet incididunt officia commodo laboris minim consequat enim est velit ea.',
        data: '12.12.2321',
        comments: [
          {
            id: '1',
            author: 'Sagittis',
            text: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget.',
            date: '12.11.1112'
          },
          {
            id: '2',
            author: 'Aliquam',
            text: 'Qui id ad sunt voluptate ex mollit excepteur. Irure laboris esse ex ullamco ex in et anim sunt. Enim elit nulla ullamco cupidatat veniam velit. In aliqua ipsum do officia Lorem anim ut in exercitation elit tempor incididunt ex irure.',
            date: '10.02.1009'
          },
          {
            id: '3',
            author: 'Vivamus',
            text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
            date: '02.10.2000'
          },
          {
            id: '4',
            author: 'Vivamus',
            text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
            date: '02.10.2000'
          },
          {
            id: '5',
            author: 'Vivamus',
            text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
            date: '02.10.2000'
          }
        ],
      },
      {
        id: 2,
        title: 'Mollis nunc sed id semper risus in hendrerit gravida rutrum.',
        description: 'Esse veniam adipisicing consequat sunt. Culpa sit adipisicing sint ex tempor ad consectetur culpa duis aliquip velit non. Incididunt incididunt qui non eiusmod ex proident cupidatat occaecat Lorem veniam laboris. Voluptate nisi ad Lorem veniam. Sit nostrud incididunt excepteur culpa velit mollit do amet ad exercitation minim. Id non esse nisi commodo nostrud esse esse. Do aliquip dolore officia officia occaecat deserunt cupidatat excepteur id id.',
        data: '10.11.1999',
        comments: [
          {
            id: '1',
            author: 'Sagittis',
            text: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget.',
            date: '12.11.1112'
          },
          {
            id: '2',
            author: 'Aliquam',
            text: 'Qui id ad sunt voluptate ex mollit excepteur. Irure laboris esse ex ullamco ex in et anim sunt. Enim elit nulla ullamco cupidatat veniam velit. In aliqua ipsum do officia Lorem anim ut in exercitation elit tempor incididunt ex irure.',
            date: '10.02.1009'
          },
          {
            id: '3',
            author: 'Vivamus',
            text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
            date: '02.10.2000'
          }
        ],
      },
      {
        id: 3,
        title: 'Turpis egestas maecenas pharetra convallis posuere.',
        description: 'Eiusmod cupidatat eiusmod consectetur duis deserunt quis do occaecat. Velit ullamco mollit dolore dolor incididunt. Adipisicing sit laboris excepteur quis velit elit reprehenderit. Dolore proident laboris aliqua ex consequat eiusmod voluptate sit aute fugiat sit consequat eiusmod. Do sit reprehenderit in labore consequat adipisicing consequat labore tempor esse veniam quis.',
        data: '06.09.1924',
        comments: [
          {
            id: '1',
            author: 'Sagittis',
            text: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget.',
            date: '12.11.1112'
          },
          {
            id: '2',
            author: 'Aliquam',
            text: 'Qui id ad sunt voluptate ex mollit excepteur. Irure laboris esse ex ullamco ex in et anim sunt. Enim elit nulla ullamco cupidatat veniam velit. In aliqua ipsum do officia Lorem anim ut in exercitation elit tempor incididunt ex irure.',
            date: '10.02.1009'
          }
        ],
      },
      {
        id: 4,
        title: 'Viverra suspendisse potenti nullam ac tortor vitae.',
        description: 'Mollit reprehenderit laborum ut irure id voluptate. Nostrud ea laborum voluptate ut. Veniam ex ea enim in irure enim incididunt laborum pariatur esse voluptate labore quis. Lorem mollit ipsum velit magna veniam mollit cillum pariatur incididunt aute incididunt. Est est velit consequat esse laboris mollit ex. Velit ipsum amet irure aliqua non sint eiusmod occaecat consequat consectetur nostrud minim nulla aute.',
        data: '04.10.1923',
        comments: [
          {
            id: '1',
            author: 'Sagittis',
            text: 'Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget.',
            date: '12.11.1112'
          },
          {
            id: '2',
            author: 'Aliquam',
            text: 'Qui id ad sunt voluptate ex mollit excepteur. Irure laboris esse ex ullamco ex in et anim sunt. Enim elit nulla ullamco cupidatat veniam velit. In aliqua ipsum do officia Lorem anim ut in exercitation elit tempor incididunt ex irure.',
            date: '10.02.1009'
          },
          {
            id: '3',
            author: 'Vivamus',
            text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
            date: '02.10.2000'
          },
          {
            id: '4',
            author: 'Vivamus',
            text: 'Elit consequat proident tempor voluptate aliquip ut officia pariatur aute non officia in enim. Cupidatat aute veniam culpa Lorem qui adipisicing non velit tempor nulla mollit. Velit ex anim mollit labore. In cupidatat velit laborum ipsum veniam pariatur incididunt.',
            date: '02.10.2000'
          }
        ],
      },
    ]
  }

  render() {
    return (
      <div className={classes.maincontent}>
        <div className={classes.btnSelections}>
          <button className={classes.addEvent}>Добавить событие</button>
          <button className={classes.sort}>Сортировать</button>
        </div>
        <ul className={classes.events}>
          {this.state.events.map((event, index) => {
            return (
              <Event
                index={index}
                title={event.title}
                description={event.description}
                data={event.data}
                comments={event.comments}
              />
            )
          })}
        </ul>
      </div>

    )
  }
}