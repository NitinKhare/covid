import React, { Component } from 'react'

class CountryItem extends Component {
    constructor(){
        super();
        this.state = {
            id:'id',
            country:"India",
            flag:"https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/in.png",
            cases:"933"
        }
    }

    render() {
        return (
            <div>
                <h3>Country Item</h3>
            </div>
        )
    }
}

export default CountryItem
