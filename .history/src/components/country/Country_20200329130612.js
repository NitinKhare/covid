import React, { Component } from 'react'

export class Country extends Component {
    state = {
        date:null,
        collectiveData:null
    }
    async componentDidMount(){
         await this.props.getCompleteCountryData(this.props.match.params.countryName)
        }
    render() {
        const {date,collectiveData} = this.props.country.data.data
        return (
            <div>
            </div>
        )
    }
}

export default Country
