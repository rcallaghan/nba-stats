import React from 'react'

const Points = (props) => {
  return (
    <span className="avg">
      {props.avg}
      <b>{props.avg && 'PPG'}</b>
    </span>
  )
}

export default Points
