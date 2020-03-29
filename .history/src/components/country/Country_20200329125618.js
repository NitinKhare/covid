import React, { Component } from 'react'

export class Country extends Component {
    async componentDidMount(){
        console.log(this.props.getCompleteCountryData(this.props.match.params.countryName)
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
