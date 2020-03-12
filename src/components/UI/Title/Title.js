import React from 'react'
import classes from './Title.scss'

const Title = props => {
  return (
    <h2 className={classes.title}>{props.children}</h2>
  )
}

export default Title