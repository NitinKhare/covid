import React from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'
import axios from 'axios';
 
class App() {

  componentDidMount(){
      axios.get("localhost:5000/countries")
  }

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

export default App;
