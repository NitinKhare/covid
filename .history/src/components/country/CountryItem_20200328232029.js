import React, { Component } from 'react'

class CountryItem extends Component {
    constructor() {
        super();
        this.
    }

    render() {
        return (
            <div className="card" style={{width: "12rem"}}>
                <img className="card-img-top " src={this.state.flag} alt={this.state.country} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.state.country}</h5>
                        <p className="card-text">
                            <ul>
                                <li className="text-dark">Cases : {this.state.cases}</li>
                                <li className="text-success">Recovered : {this.state.recovered}</li>
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
