import React, {Component} from 'react'

import PlayerPicture from '../PlayerPicture'
import PlayerName from '../PlayerName'
import Points from '../Points'
import Rebounds from '../Rebounds'
import Assists from '../Assists'

export default class List extends Component {
  constructor(props) {
    super()
  }

  render() {
    const data = this.props.data
    return (
      <div>
        <PlayerPicture id={data && this.props.data.playerId} />
        <PlayerName name={data && this.props.data.playerName} />
        <Points avg={data && this.props.data.pts }/>
        <Assists avg={data && this.props.data.ast }/>
        <Rebounds avg={data && this.props.data.reb }/>
      </div>
    )
  }
}
