import React, { Component } from 'react'

class Country extends Component {
    async componentDidMount() {

        await this.props.getCompleteCountryData(this.props.match.params.countryName)
    }

    render() {
            const {date, collectiveData} = this.props.country;
            console.log(collectiveData)
            const {loading} = this.props;
            if(date && date.country){
            return (
                <div>
                    {date.country}
                </div>
            )
            }else{
                return(
                    <div></div>
                )
            }
    }
}

export default Country
