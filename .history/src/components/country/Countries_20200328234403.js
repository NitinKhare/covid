import React, { Component } from 'react'
import CountryItem from './CountryItem';

export class Countries extends Component {
    state = {
        countries :[
            {
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
            },{
                id: 380,
                flag: "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/it.png",
                country:"Italy",
                cases: 92472,
                todayCases: 5974,
                deaths: 10023,
                todayDeaths: 889,
                recovered: 12384,
                active: 70065,
                critical: 3856,
                casesPerOneMillion: 1529,
                deathsPerOneMillion: 166
              },{
                _id: 840,
                country: "USA",
                flag: "https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png",
                cases: 116050,
                todayCases: 11924,
                deaths: 1937,
                todayDeaths: 241,
                recovered: 3224,
                active: 110889,
                critical: 2666,
                casesPerOneMillion: 351,
                deathsPerOneMillion: 6
              }
            

        ]
    }


    render() {
        return (
            <div className="row">
            <div className="col-sm-6 col-sm-offset-3" style={countryStyle}>
                {this.state.countries.map((country)=>(
                    <CountryItem key={country.country} country = {country}/>
                ))}
            </div>
            </div>
        )
    }
}

var countryStyle = {
    display :'grid',
    gridTemplateColumns: 'repear(3, 1fr)',
    gridGap: '1rem'
}

export default Countries
