import React, { Component } from 'react'

class Country extends Component {

    async componentDidMount() {
        await this.props.getCompleteCountryData(this.props.match.params.countryName)
        console.log(this.props.country)
    }

    render() {
            const {date, collectiveData} = this.props.country;
            const {loading} = this.props;
            return (
                <div>
                    {DataCue.country}
                </div>
            )

    }
}

export default Country
