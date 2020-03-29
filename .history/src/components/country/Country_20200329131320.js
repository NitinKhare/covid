import React, { Component } from 'react'

 class Country extends Component {
state = {
    date: null,
    collectiveData :null
}
getCompleteCountryData = async (name) => {
    this.setState({ loading: true })
    let countryData = await axios.get(`http://localhost:5000/country/${name}`)
    this.setState({ country: countryData, loading: false })
  }
     async componentDidMount(){
          await this.props.getCompleteCountryData(this.props.match.params.countryName)
          this.setState({date:this.props.country.data.data,collectiveData:this.props.country.data.data.collectiveData})
          console.log(this.state)
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
