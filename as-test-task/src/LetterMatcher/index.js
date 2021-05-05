import React from 'react'
import { list } from './list.js'

class LetterMatcher extends React.Component {
  render() {
    const FilteredList = list.filter((e) => e.name[0] === this.props.value)
    return (
      <div>
        {FilteredList.length ? (
          FilteredList.map((item, index) => {
            return <div>LetterMatcher: {item.name}</div>
          })
        ) : (
          <div>no matches result</div>
        )}{' '}
      </div>
    )
  }
}

export default LetterMatcher
