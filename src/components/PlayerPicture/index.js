import React from 'react'

const PlayerPicture = (props) => {
  return (
    <img src={`http://stats.nba.com/media/players/230x185/${props.id}.png`}/>
  )
}

export default PlayerPicture
