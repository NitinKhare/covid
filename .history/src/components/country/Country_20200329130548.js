import React, { Component } from 'react'

export class Country extends Component {
    state = {
        date:null,
        collectiveData:null
    }
    async componentDidMount(){
         await this.props.getCompleteCountryData(this.props.match.params.countryName)
         this.setState({date:this.props.country.data.data.date,collectiveData:this.props.country.data.data.collectiveData })
            console.log(this.state.date.country)
        }
    render() {
        const {date,collectiveData
        }
        return (
            <div>
            </div>
        )
    }
}

export default Country
