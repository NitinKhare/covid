import React from 'react'

function CountryItem(props) {
        return (
            <div>
            <div className="card" style={{height:"18em"}}>
                <img className="card-img-top" style={{height:"12em"}} src={props.country.countryInfo.flag} alt={props.country.country} />
                    <div className="card-body" >
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
                </div>
        )
    
}

const border = {
    
}

export default CountryItem
