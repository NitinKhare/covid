import React, { Component } from 'react'

class Country extends Component {
    async componentDidMount() {

        await this.props.getCompleteCountryData(this.props.match.params.countryName)
    }

    render() {
            const {date, collectiveData} = this.props.country;
            console.log(date)
            const {loading} = this.props;
            if(!loading){
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
