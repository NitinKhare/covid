import React, { Component } from 'react'

class Country extends Component {

    async componentDidMount() {
        await this.props.getCompleteCountryData(this.props.match.params.countryName)
        console.log("Country cOmponent",this.props.country.date;
        let {date, collectiveData} = this.props.country;
        console.log(date, collectiveData)
        )
    }

    render() {
            const {date, collectiveData} = this.props.country;
            const {loading} = this.props;
            return (
                <div>

                </div>
            )

    }
}

export default Country
