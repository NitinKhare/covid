import React, { Component } from 'react'
import CountryItem from './CountryItem';

export class Countries extends Component {
    render() {
        return (
            <div  className="card-group" style={countryStyle}>
                {this.props.countries.map((country)=>(
                    <CountryItem key={country.country} country = {country}/>
                ))}
            \
        )
    }
}

var countryStyle = {
    display :'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '12rem'
}

export default Countries
