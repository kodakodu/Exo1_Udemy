import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    name: "Yann"
}
  
  render() {
    return (
      <div className="App">

        <UserInput/>
        <UserOutput username={this.state.name}/>
        <UserOutput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
