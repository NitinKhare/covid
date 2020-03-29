import React, { Component } from 'react'

export class Country extends Component {
    async componentDidMount(){
        this.props.getCompleteCountryData(this.props.match.params.)
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
