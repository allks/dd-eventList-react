import React, {Component} from 'react'
import classes from './Events.scss'
import EventItem from '../../components/EventList/EventList'

class Events extends Component {
  state = {
    events: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Tristique nulla aliquet enim tortor at auctor. Amet consectetur adipiscing elit ut aliquam purus sit amet.',
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
          }
        ],
      },
      {
        id: 2,
        title: 'Mollis nunc sed id semper risus in hendrerit gravida rutrum.',
        description: 'Nunc sed id semper risus. At elementum eu facilisis sed odio morbi quis commodo odio. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Quam quisque id diam vel quam elementum.',
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
        description: 'Diam sit amet nisl suscipit. Amet facilisis magna etiam tempor. Velit laoreet id donec ultrices tincidunt.',
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
        id: 4,
        title: 'Viverra suspendisse potenti nullam ac tortor vitae.',
        description: 'Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.',
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
          }
        ],
      },
    ]
  }

  render() {
    return(
      <div className={classes.events}>
        <EventItem
          title={this.state.events[0].title}
          description={this.state.events[0].description}
          data={this.state.events[0].data}
          comments={this.state.events[0].comments}
        />
      </div>
    )
  }
}

export default Events