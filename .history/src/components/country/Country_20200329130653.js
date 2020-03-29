import React, { Component } from 'react'

 class Country extends Component {

    async componentDidMount(){
         await this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.log(this,)
        }
    render() {
        const {date,collectiveData} = this.props.country.data.data
        return (
            <div>
                {date.country}
            </div>
        )
    }
}

export default Country
