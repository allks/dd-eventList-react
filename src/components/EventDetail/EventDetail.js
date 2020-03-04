import React from 'react'

export default class EventDetail extends React.Component {

  goToBack = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.goToBack}>go to back</button>
        <h3>{this.props.match.params.index}</h3>
      </div>
    )
  }
}