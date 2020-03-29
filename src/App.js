import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'
import Country from './components/country/Country'
import Alert from './components/layout/Alert'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/Pages/About'
import TotalStats from './components/layout/TotalStats'
class App extends Component {

  state = {
    countries: [],
    loading: false,
    alert: null,
    country:{},
    totalStats:{}
  }

  async componentDidMount() {
    this.setState({ loading: true })
    let countriesData = await axios.get("http://localhost:5000/countries")
    let totalData = await axios.get("https://corona.lmao.ninja/all");
    this.setState({ countries: countriesData.data.data.collectiveData,totalStats:totalData.data, loading: false })
  }

  getCountryData = async (name) => {
    this.setState({ loading: true })
    let countriesData = await axios.get(`http://localhost:5000/country/${name}`)
    this.setState({ countries: [countriesData.data.data.collectiveData], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 3500)
  }
  getCompleteCountryData = async (name) => {
    this.setState({ loading: true })
    let countryData = await axios.get(`http://localhost:5000/country/${name}`)
    this.setState({country:{date:countryData.data.data.date, collectiveData:countryData.data.data.collectiveData}})
    this.setState({ loading: false })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar setAlert={this.setAlert} getCountryData={this.getCountryData} title='CoronaTracker' />
          <br />
          <div className="container">
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Alert alert={this.state.alert} />
                  <div>
                  <h3>Data for : <span className="text-success">{this.state.countries.length}</span> {this.state.countries.length > 1 ? "countries" : `country`} </h3>
                  <TotalStats totalStats={this.state.totalStats} />
                  </div>
                  <br />
                  <div className="text-center">
                    <Countries loading={this.state.loading} countries={this.state.countries} />
                  </div>
                </Fragment>
              )} />
              <Route exact path = '/about' component={About} />
              <Route exact path = '/country/:countryName' render ={props =>(
                <Country { ...props } getCompleteCountryData = {this.getCompleteCountryData} loading={this.state.loading} country={this.state.country}/>
              )} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
