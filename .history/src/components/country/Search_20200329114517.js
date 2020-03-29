import React, { Component,Fragment } from 'react'

export class Search extends Component{
    state = {
        text: ''    
    }
    
    onChange = (evt)=>this.setState({[evt.target.name]: evt.target.value})
    
    onSubmit = (evt) =>{
       evt.preventDefault();
       if(this.state)
       this.props.getCountryData(this.state.text);
       this.setState({text:''})
    }
    render(){
    return (
        <Fragment>
       <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" 
      type="search"
      name="text"
      onChange={this.onChange} 
      value = {this.state.text}
      placeholder="Search Countries"
      aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
        </Fragment>
    )
    }
}

export default Search