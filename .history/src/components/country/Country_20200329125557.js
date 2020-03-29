import React, { Component } from 'react'

export class Country extends Component {
    async componentDidMount(){
        this.props.getCompleteCountryData()
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
