import React, { Component } from 'react'
import Spinder from '../layout/Spinner'
class Country extends Component {
    async componentDidMount() {

        await this.props.getCompleteCountryData(this.props.match.params.countryName)
    }

    render() {
            const {date, collectiveData} = this.props.country;
            const {loading} = this.props;
            if(date && date.country){
            return (
                <div>
                    {collectiveData.country}
                </div>
            )
            }else{
                return(
                   
                )
            }
    }
}

export default Country
