import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
class Country extends Component {
    async componentDidMount() {

        await this.props.getCompleteCountryData(this.props.match.params.countryName)
    }

    render() {
            const {date, collectiveData} = this.props.country;
            const {loading} = this.props;
            if(!loading && date && date.country){
            return (
                <div>
                    <div>
                    <img className="img-fluid"  src={collectiveData.countryInfo.flag} alt={collectiveData.country} />
                    <h4>{collectiveData.country}</h4>
                    </div>
                </div>
            )
            }else{
                return(
                   <Spinner />
                )
            }
    }
}

export default Country
