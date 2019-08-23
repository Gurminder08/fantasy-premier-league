import React, { Component } from 'react'

class Playerstats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            players: ''
        }
        this.playerInputHandle = this.playerInputHandle.bind(this);
    }

    playerInputHandle(e) {
        this.setState({
            inputValue: e.target.value
        });

        const playersPromise = this.props.players;

        playersPromise.then((response) => {
            let players = response.filter((player) => player.first_name === this.state.inputValue);
            this.setState({
                players: players
            })
        }).catch((err) => console.log(err));

    }

    render() {

        return (

            <div className="rTable">
                <h2>Player Statistics</h2>
                <input id="player-input" type="text" onChange={this.playerInputHandle} />
                <div className="rTableRow">
                    <div className="rTableHead"><strong>Name</strong></div>
                    <div className="rTableHead"><strong>Goals</strong></div>
                    <div className="rTableHead"><strong>Assists</strong></div>
                    <div className="rTableHead"><strong>Points/Game</strong></div>
                    <div className="rTableHead"><strong>Current Value</strong></div>
                    <div className="rTableHead"><strong>Dream Team</strong></div>
                    <div className="rTableHead"><strong>News</strong></div>
                </div>
                {this.state.players.length > 0 ? (this.state.players.map((player, index) =>
                    <div key={index} className="rTableRow">
                        <div className="rTableCell">{player.web_name}</div>
                        <div className="rTableCell">{player.goals_scored}</div>
                        <div className="rTableCell">{player.assists}</div>
                        <div className="rTableCell">{player.points_per_game}</div>
                        <div className="rTableCell">{player.now_cost}</div>
                        {(player.in_dreamteam) ? (<div className="rTableCell">Yes</div>) : (<div className="rTableCell">No</div>)}
                        <div className="rTableCell">{player.news}</div>
                    </div>)
                ) : (
                        <div></div>
                    )}

            </div>
        )
    }
}

export default Playerstats
