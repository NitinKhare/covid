import React, { Component } from 'react'

 class Country extends Component {

     componentDidMount(){
          this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.log(this.props.country.data.data)
        }
    render() {
        return (
            <div>
                {date.country}
            </div>
        )
    }
}

export default Country
