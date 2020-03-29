import React, { Component } from 'react'

class Country extends Component {

    async componentDidMount() {
        await this.props.getCompleteCountryData(this.props.match.params.countryName)
        console.log("Country cOmponent",this.props.country.date
        const {date, collectiveData} = this.props.country;
        console.log()
        )
    }

    render() {
            const {date, collectiveData} = this.props.country;
            const {loading} = this.props;
            return (
                <div>
                                       {this.props.country.date.country}

                </div>
            )

    }
}

export default Country
