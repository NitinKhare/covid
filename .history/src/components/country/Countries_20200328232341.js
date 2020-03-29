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
            },{
                
                cases: 92472,
                todayCases: 5974,
                deaths: 10023,
                todayDeaths: 889,
                recovered: 12384,
                active: 70065,
                critical: 3856,
                casesPerOneMillion: 1529,
                deathsPerOneMillion: 166
              }
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
