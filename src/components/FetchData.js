import React from 'react'

export default class FetchData extends React.Component {
    state = {
        loading: true,
        player: []
      }
      
      async componentDidMount () {
        const url = "https://manutd-players.herokuapp.com/players"
        const response = await fetch(url)
        const data = await response.json()
    
        const {
          players = [],
          memberList = players.slice(0,4).map(item => item.members).flat(),
        } = data
    
        this.setState({player: memberList, loading: false})
      }
      
      render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
      
        if (!this.state.player.length) {
            return <div>Did not get any player</div>
        }
      
        return (
            <div>
                <h1>Manchester United Players</h1>
    
                {this.state.player.map((item, key) => {
                  return (
                    <div key={key}>
                      <img src={'https://' + item.image} width="500" alt={item.name}/><br />
                      <b>{item.name}</b><br />
                      <b>Jersey No:</b> {item.jersey}<br/>
                      <b>Country:</b> {item.country}
                      <br/> <br/>
                    </div>
                  )
                })}
            </div>
        )
      }
}
