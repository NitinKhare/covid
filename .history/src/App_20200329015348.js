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
      console.log(countriesData)
      this.setState({countries:countriesData.data.data.collectiveData, loading:false})
  }

  getCountryData = async (name)=>{
    let countriesData = await axios.get(`http://localhost:5000/country/${name}`)
    console.log(countriesData.data.data.collectiveData)
    this.setState({countries:[countriesData.data.data.collectiveData], loading:false})
  }

  render(){
  return (
    <div className="App">
      <Navbar getCountryData = {this.getCountryData} title='CoronaTracker' />
      <br />
      <div className="container">
        <h3>Data for : <span className="text-success">{this.state.countries.length}</span> {this.state.countries.length > 1 ? "countries" : `country`} </h3>
        <br />
        {this.state.countries.length  ? <div className="text-center">
      <Countries loading={this.state.loading} countries = {this.state.countries} />
      </div> : `Couldn't find a Country`}

      </div>
      </div>
  );
}
}

export default App;
