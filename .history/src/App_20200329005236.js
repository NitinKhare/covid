import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'
import axios from 'axios';
 
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
      <br />
      <div className="container">
        <h3>Data for : <span className="text-success">{this.state.countries.length}</span> Countries </h3>
        <h3>Countries with no Deaths : <span className="text-success">{this.state.countries.length}</span> Countries </h3>
        <h3>Data for : <span className="text-success">{this.state.countries.length}</span> Countries </h3>
        <h3>Data for : <span className="text-success">{this.state.countries.length}</span> Countries </h3>
        <br />
      <div className="text-center">
      <Countries loading={this.state.loading} countries = {this.state.countries} />
      </div>
      </div>
      </div>
  );
}
}

export default App;
