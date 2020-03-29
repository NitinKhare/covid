import React, { Component } from 'react'
import CountryItem from './CountryItem';
import Spinner from '../layout/Spinner'

export class Countries extends Component {
    render() {
        if(this.props.loading){
            return <Spinner />
        }else ifelse{
        return (
            
            <div style={countryStyle}>
                {this.props.countries.map((country)=>(
                    <CountryItem key={country.country} country = {country}/>
                ))}
            </div>
        )
    }
    }
}

var countryStyle = {
    display :'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '3rem'
}

export default Countries
