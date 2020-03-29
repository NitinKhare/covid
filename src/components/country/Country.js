import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import CollectiveInfo from '../charts/CollectiveInfo'
import CasesLineChart from '../charts/CasesLineChart'
import CasesDeathChart from '../charts/CasesDeathChart'
import PieChart from '../charts/PieChart';


class Country extends Component {
    async componentDidMount() {
        await this.props.getCompleteCountryData(this.props.match.params.countryName)
    }

    render() {
        const { date, collectiveData } = this.props.country;
        const { loading } = this.props;
        if (!loading && date && date.country) {
            return(
                <div className="container grid-container">
                    <div className="row ">
                    <div className="col-md-12 mt-2">
                    <CollectiveInfo collectiveData = {collectiveData}/>
                    </div>
                    <hr />
                    <div className="col-md-6 mt-2">
                    <CasesLineChart date={date} collectiveData = {collectiveData} />
                    </div>
                    <div className="col-md-6 mt-2">
                    <CasesDeathChart date={date} collectiveData = {collectiveData} />
                    </div>
                    <hr />
                    <div className="col-md-6 mt-2">
                    <PieChart collectiveData = {collectiveData} />
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
