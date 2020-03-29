import React, { Component } from 'react'

 class Country extends Component {

     async componentDidMount(){
          await this.props.getCompleteCountryData(this.props.match.params.countryName)
          console.log(this.props.country.data.data)
        }
    render() {
        const{
            date,
            collectiveData
        } = this.props.country
        return (
            <div>
            </div>
        )
    }
}

export default Country
