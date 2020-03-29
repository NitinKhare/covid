import React, { Component } from 'react'

 class Country extends Component {
state = {
    date: null,
    collectiveData :null,
}


     async componentDidMount(){
          await this.getCompleteCountryData(this.props.match.params.countryName)
          this.setState({loading:false})
        }
        
    render() {
  if(this.state.loading){
return(
    <div> </div>
)
  }else{
    return (
        <div>
            {this.props.date.country}
        </div>
    )
  }

    }
}

export default Country
