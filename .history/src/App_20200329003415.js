import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'
import axios from 'axios';
import { render } from '@testing-library/react';
 
class App extends Component {

  state={
    country:[],
    loading:false
  }

  async componentDidMount(){
      this.setState({loading:true})
      let countriesData = await axios.get("http://localhost:5000/countries")
      this.setState({country:countriesData.data.data.collectiveData, loading:})
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
