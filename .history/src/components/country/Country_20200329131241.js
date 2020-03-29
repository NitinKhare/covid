import React, { Component } from 'react'

 class Country extends Component {
state = {
    date: null,
    collectiveData :null
}
     async componentDidMount(){
          await this.props.getCompleteCountryData(this.props.match.params.countryName)
          this.setState({date:this.props.country.data.data,collectiveData:this.props.country.data.data.collectiveData})
          console.log(this.state)
        }
    render() {

        return (
            <div>
                {this.state.date}
            </div>
        )
    }
}

export default Country
