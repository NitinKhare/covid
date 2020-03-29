import React, { Component } from 'react'

class Country extends Component {

    async componentDidMount() {
        await this.props.getCompleteCountryData(this.props.match.params.countryName)
        console.log(this.props.country)
    }

    render() {

            return (
                <div>
                    {this.props.date.country}
                </div>
            )

    }
}

export default Country
