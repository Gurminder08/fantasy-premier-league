import './App.css';
import React, { Component } from 'react'
import Playerstats from './components/Playerstats'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      element_stats: '',
      element_types:'',
      elements:'',
      events:'',
      game_settings:'',
      phases:'',
      teams:'',
      total_players:''
    }
  }

  componentDidMount(){
    const response = fetch('http://localhost:8000/bootstrap-static');
    response.then((resp)=>{
      resp.json().then((data)=>{
        this.setState({
          element_stats: data.element_stats,
          element_types: data.element_types,
          elements:data.elements,
          events:data.events,
          game_settings:data.game_settings,
          phases:data.phases,
          teams:data.teams,
          total_players:data.total_players
        })
      });
    },(err)=>{
      console.log(err);
    });
  }

  render() {

    const playersPromise = new Promise((resolve)=>{
      resolve(this.state.elements);
    });

    return (
      <div className="Main">
          <Playerstats players={playersPromise}/>
      </div>
    )
  }
}

export default App

