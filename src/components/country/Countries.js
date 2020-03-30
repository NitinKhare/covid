import React, { Component } from 'react'
import CountryItem from './CountryItem';
import Spinner from '../layout/Spinner'

export class Countries extends Component {
    render() {
        if(this.props.loading){
            return <Spinner />
        }else if(this.props.countries.length === 0 || this.props.countries[0] === undefined){
            return(
            <h6>No Country Found Search either with Full Name or Abbreviations</h6>
            )
        }else{
        return (
            <div className="row">
                {this.props.countries.map((country)=>(
                    <CountryItem key={country.country} country = {country}/>
                ))}
            </div>
        )
    }
    }
}

// var countryStyle = {
//     display :'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '3rem'
// }

export default Countries
