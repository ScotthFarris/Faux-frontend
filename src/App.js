import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleApiWrapper from './components/mapcontainer'


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			availabilities: [],
			apiUrl: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHEKTmg_-2YGuO7CSoQgw-nunhQL7xTM&callback=initMap"
		}
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<GoogleApiWrapper />
      </div>
    );
  }
}

export default App;
