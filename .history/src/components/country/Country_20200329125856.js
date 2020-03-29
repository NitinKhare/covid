import React, { Component } from 'react'

export class Country extends Component {
    async componentDidMount(){
        console.log("Printing Props",this.props)
         await this.props.getCompleteCountryData(this.props.match.params.countryName)
         console.log(this.pr)
    }
    render() {
        return (
            <div>
                asdasdasddas
            </div>
        )
    }
}

export default Country
