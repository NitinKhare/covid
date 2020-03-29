import React from 'react'

function CountryItem(props) {
        return (
            <div className="card" style={{height:"10em"}}>
                <img className="card-img-top" style={{height:"10em"}} src={props.country.flag} alt={props.country.country} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.country.country}</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-dark">Cases : {props.country.cases}</li>
                                <li className="list-group-item text-success">Healed : {props.country.recovered}</li>
                                <li className="list-group-item text-danger">Deaths : {props.country.deaths}</li>
                            </ul>
                            <br />
                        <div className = "text-center">
                        <a href="/" className="btn btn-md btn-info">View Details</a>
                        </div>
                    </div>
                </div>
        )
    
}

export default CountryItem
