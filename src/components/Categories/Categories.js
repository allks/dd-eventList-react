import React from 'react'
import classes from './Categories.scss'

export default class Categories extends React.Component {
  render() {
    return (
      <div className={classes.aside}>
        <h2 className={classes.subTitle}>Категории</h2>
        <ul className={classes.list}>
          <li>Proident officia id est ad consectetur commodo adipisicing esse.</li>
          <li>Commodo cupidatat eu Lorem voluptate veniam dolor officia ea.</li>
          <li>Consectetur nulla do est ullamco ut est est elit elit laborum laboris.</li>
          <li>Deserunt ea sint cupidatat esse in laborum proident do fugiat commodo.</li>
          <li>Adipisicing do ad excepteur officia consequat sit enim nostrud ad et mollit laboris sint.</li>
          <li>Ea magna laborum laborum cupidatat officia ex consectetur deserunt excepteur mollit sit.</li>
          <li>Ea anim est duis enim.</li>
          <li>Cupidatat duis consectetur eiusmod laborum non veniam laborum amet enim est.</li>
          <li>Qui consectetur minim aliquip cillum sunt nulla occaecat officia exercitation do in minim amet do.</li>
          <li>Adipisicing est magna ut irure pariatur dolor ea nostrud esse duis voluptate.</li>
        </ul>
      </div>
    )
  }
}