import React, { Component } from 'react'

export class Country extends Component {
    state = {
        date:null,
        collectiveD
    }
    async componentDidMount(){
         await this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.log(this.props.country.data.data)
    }
    render() {
        return (
            <div>
                asdasdasddas
            </div>
        )
    }
}

export default Country
