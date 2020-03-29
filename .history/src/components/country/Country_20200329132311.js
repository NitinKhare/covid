import React, { Component } from 'react'

class Country extends Component {

    async componentDidMount() {
        await this.props.getCompleteCountryData(this.props.match.params.countryName)
        console.log(this.props.country)
    }

    render() {
            const {date, country} = this.props.country
            
            return (
                <div>
                </div>
            )

    }
}

export default Country
