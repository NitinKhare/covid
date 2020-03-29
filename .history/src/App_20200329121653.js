import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'
import Alert from './components/layout/Alert'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/Pages/About'

class App extends Component {

  state = {
    countries: [],
    loading: false,
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true })
    let countriesData = await axios.get("http://localhost:5000/countries")
    console.log(countriesData)
    this.setState({ countries: countriesData.data.data.collectiveData, loading: false })
  }

  getCountryData = async (name) => {
    let countriesData = await axios.get(`http://localhost:5000/country/${name}`)
    console.log(countriesData.data.data.collectiveData)
    this.setState({ countries: [countriesData.data.data.collectiveData], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 3500)
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
                  <h3>Data for : <span className="text-success">{this.state.countries.length}</span> {this.state.countries.length > 1 ? "countries" : `country`} </h3>
                  <br />
                  <div className="text-center">
                    <Countries loading={this.state.loading} countries={this.state.countries} />
                  </div>
                </Fragment>
              )} />
              <Route exact path
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
