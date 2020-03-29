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
                            <img className="img-fluid img-thumbnail" style={{width:"80%"}} src={collectiveData.countryInfo.flag} alt={collectiveData.country} />
                            <br/>
                            <p className="pull-right"><bold>{collectiveData.country}</bold></p>
                            <figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
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
