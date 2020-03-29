import React, { Component } from 'react'

 class Country extends Component {

     async componentDidMount(){
          await this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.log(this.props)
        }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Country
