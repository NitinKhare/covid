import React, { Component } from 'react'

class CountryItem extends Component {
    constructor() {
        super();
        this.state = {
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
    }

    render() {
        return (
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src={this.state.countr} alt="Card image cap">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        )
    }
}

export default CountryItem
