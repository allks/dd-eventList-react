import React from 'react'
import classes from './Search.scss'

const Search = () => {
  return (
      <input
        className={classes.search}
        type="text"
        placeholder="Поиск"
      />
  )
}

export default Search