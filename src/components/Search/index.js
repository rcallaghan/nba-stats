import React, { Component } from 'react'
import List from '../List'
import nba from 'nba'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      id: ''
    }
  }

  handleChange(e) {
    const playerID = nba.playerIdFromName(e.target.value)
    this.setState({id: playerID})

    nba.stats.playerInfo({'PlayerID': this.state.id}).then(payload =>
      this.setState({playerData: payload.playerHeadlineStats[0]})
    )
  }

  render() {
    return (
      <div className="App-search">
        <input type="text" placeholder="Search for your player" onChange={this.handleChange.bind(this)} />
        {this.state.playerData && <List data={this.state.playerData && this.state.playerData}/>}
      </div>
    )
  }
}
