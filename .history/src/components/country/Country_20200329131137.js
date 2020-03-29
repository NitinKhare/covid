import React, { Component } from 'react'

 class Country extends Component {
state = {
    date: null,
    collectiveData :null
}
     async componentDidMount(){
          await this.props.getCompleteCountryData(this.props.match.params.countryName)
          this.setState({date:this.props.country.data.data})
          console.log(this.props.country.data.data)
        }
    render() {
        const{
            date,
            collectiveData
        } = this.props.country.data.data
        return (
            <div>
            </div>
        )
    }
}

export default Country
