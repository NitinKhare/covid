import React, { Component } from 'react'

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
            }
        ]
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Countries
