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
                    <div className="row" style={{border: "1px solid grey"}}>
                        <div className="col-sm-4">
                            <img className="img-fluid" src={collectiveData.countryInfo.flag} alt={collectiveData.country} />
                        </div>
                        <div className="col-sm-8">
                            <div className="row" >
                                <div className="col-sm-12">
                                    <h6>Country : {collectiveData.country}</h6>
                                </div>
                                <div className="col-sm-12">
                                    <h6>Total Cases : {collectiveData.cases}</h6>
                                </div>
                                
                                <div className="col-sm-12">
                                    <h6>Cases Per Million : {collectiveData.casesPerOneMillion}</h6>
                                </div>

                                <div className="col-sm-12">
                                    <h6>Cases Today : {collectiveData.todayCases}</h6>
                                </div>
                                <div className="col-sm-12">
                                    <h6>Recovered : {collectiveData.recovered}</h6>
                                </div>
                                <div className="col-sm-12">
                                    <h6>Cases Active : {collectiveData.active}</h6>
                                </div>
                                <div className="col-sm-12">
                                    <h6>Critical Cases : {collectiveData.critical}</h6>
                                </div>
                                <div className="col-sm-12">
                                    <h6>Deaths : {collectiveData.deaths}</h6>
                                </div>
                                <div className="col-sm-12">
                                    <h6>Deaths Today : {collectiveData.todayDeaths}</h6>
                                </div>

                            </div>
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
