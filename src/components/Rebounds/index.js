import React from 'react'

const Rebounds = (props) => {
  return (
    <span className="avg">
      {props.avg}
      <b>{props.avg && 'RPG'}</b>
    </span>
  )
}

export default Rebounds
