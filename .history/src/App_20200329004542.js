import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'
import axios from 'axios';
import { render } from '@testing-library/react';
 
class App extends Component {

  state={
    countries:[],
    loading:false
  }

  async componentDidMount(){
      this.setState({loading:true})
      let countriesData = await axios.get("http://localhost:5000/countries")
      this.setState({countries:countriesData.data.data.collectiveData, loading:false})
  }

  render(){
  return (
    <div className="App">
      <Navbar title='CoronaTracker' />
      <div className="container">
      <div className="text-center">
      <Countries countries = {this.state.countries} />
      </div>
      </div>
      </div>
  );
}
}

export default App;
