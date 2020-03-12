import React from 'react'
import classes from './Search.scss'

const Search = () => {
  return (
    <div className={classes.wrap}>
      <input
        className={classes.search}
        type="text"
      />
    </div>
  )
}

export default Search