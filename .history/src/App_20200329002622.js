import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'
import axios from 'axios';
import { render } from '@testing-library/react';
 
class App extends Component {

  async componentDidMount(){
      let countriesData = await axios.get("localhost:5000/countries")
      console.log(countriesData)
  }

  render(){
  return (
    <div className="App">
      <Navbar title='CoronaTracker' />
      <div className="container">
      <div className="text-center">
      <Countries />
      </div>
      </div>
      </div>
  );
}
}

export default App;
