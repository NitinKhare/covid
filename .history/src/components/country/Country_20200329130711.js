import React, { Component } from 'react'

 class Country extends Component {

     componentDidMount(){
          this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.log(this)
        }
    render() {
        const {date} = this.props.country.data.data
        return (
            <div>
                {date.country}
            </div>
        )
    }
}

export default Country
