import React, { Component } from 'react'

class CountryItem extends Component {
    render() {
        return (
            <div className="card" style={{width: "12rem"}}>
                <img className="card-img-top " src={this.props.country.flag} alt={this.props.country.country} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.country.country}</h5>
                        c<p lassName="card-text">
                            <ul>
                                <li className="text-dark">Cases : {this.props.country.cases}</li>
                                <li className="text-success">Healed : {this.props.country.recovered}</li>
                                <li className="text-danger">Deaths : {this.props.country.deaths}</li>
                            </ul>
                       
                        <div className = "text-center">
                        <a href="/" class="btn btn-md btn-info">View Details</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CountryItem
