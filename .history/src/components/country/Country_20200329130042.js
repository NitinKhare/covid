import React, { Component } from 'react'

export class Country extends Component {
    state = {
        date:null,
        collectiveData:null
    }
    async componentDidMount(){
         await this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.log(this.props.country.data.data)
         this.setState({date:this.props.country.data.data.date,collectiveData: })
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
