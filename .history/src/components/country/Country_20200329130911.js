import React, { Component } from 'react'

 class Country extends Component {

     async componentDidMount(){
          await this.props.getCompleteCountryData(this.props.match.params.countryName)
        }
    render() {
        const{
            date,
            collectiveData
        } = this.pr
        return (
            <div>
            </div>
        )
    }
}

export default Country
