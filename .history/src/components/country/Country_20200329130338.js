import React, { Component } from 'react'

export class Country extends Component {
    state = {
        date:null,
        collectiveData:null
    }
    async componentDidMount(){
         await this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.og(this.props.country.data.data)
         this.setState({date:this.props.country.data.data.date,collectiveData:this.props.country.data.data.collectiveData })
            console.log(this.state)
        }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Country
