import React, { Component } from 'react'
import axios from 'axios';

 class Country extends Component {
state = {
    date: null,
    collectiveData :null
}
getCompleteCountryData = async (name) => {
    this.setState({ loading: true })
    let countryData = await axios.get(`http://localhost:5000/country/${name}`)
    console.log(countryData)
  }

     async componentDidMount(){
          await this.getCompleteCountryData(this.props.match.params.countryName)
        }
    render() {

        return (
            <div>
                {this.state.date.country}
            </div>
        )
    }
}

export default Country
