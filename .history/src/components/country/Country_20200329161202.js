import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
class Country extends Component {
    async componentDidMount() {

        await this.props.getCompleteCountryData(this.props.match.params.countryName)
    }

    render() {
        const { date, collectiveData } = this.props.country;
        const { loading } = this.props;
        if (!loading && date && date.country) {
            return (
                <div className="container">
                    <div className="row" >
                        <div className="col-sm-4">
                            <img className="img-fluid" src={collectiveData.countryInfo.flag} alt={collectiveData.country} />
                            <br>
                            <p>{collectiveData.country}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Spinner />
            )
        }
    }
}

export default Country
