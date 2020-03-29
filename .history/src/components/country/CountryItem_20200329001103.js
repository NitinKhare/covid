import React from 'react'

function CountryItem(props) {
        return (
            <div className="card" style={{height:"10em"}}>
                <img className="card-img-top" style={{height:"10em"}} src={this.props.country.flag} alt={this.props.country.country} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{this.props.country.country}</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-dark">Cases : {this.props.country.cases}</li>
                                <li className="list-group-item text-success">Healed : {this.props.country.recovered}</li>
                                <li className="list-group-item text-danger">Deaths : {this.props.country.deaths}</li>
                            </ul>
                            <br />
                        <div className = "text-center">
                        <a href="/" class="btn btn-md btn-info">View Details</a>
                        </div>
                    </div>
                </div>
        )
    
}

export default CountryItem
