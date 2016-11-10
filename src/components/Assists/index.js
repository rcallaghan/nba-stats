import React from 'react'

const Assists = (props) => {
  return (
    <span className="avg">
      {props.avg}
      <b>{props.avg && 'APG'}</b>
    </span>
  )
}

export default Assists
