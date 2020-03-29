import React, { Component } from 'react'

class Country extends Component {



    async componentDidMount() {
        await this.props.getCompleteCountryData(this.props.match.params.countryName)
        this.setState({ loading: false })
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
