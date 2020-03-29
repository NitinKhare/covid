import React, { Component } from 'react'

class CountryItem extends Component {
    state = {
        id: 'id',
        country: "India",
        flag: "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png",
        cases: 933,
        todayCases: 46,
        deaths: 20,
        todayDeaths: 0,
        recovered: 84,
        active: 829,
        critical: 0,
        casesPerOneMillion: 0.7,
        deathsPerOneMillion: 0.01
    }
    render() {
        return (
            <div className="card" style={{width: "12rem"}}>
                <img className="card-img-top " src={this.props.country.flag} alt={this.props.country.country} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.country.country}</h5>
                        <p className="card-text">
                            <ul>
                                <li className="text-dark">Cases : {this.props.country.cases}</li>
                                <li className="text-success">Recovered : {this.props.country.recovered}</li>
                                <li className="text-danger">Deaths : {this.state.deaths}</li>
                            </ul>
                        </p>
                        <div className = "text-center">
                        <a href="/" class="btn btn-md btn-info">View Details</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CountryItem