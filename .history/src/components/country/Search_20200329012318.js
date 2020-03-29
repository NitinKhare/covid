import React, { Component,Fragment } from 'react'

export class Search extends Component{
    state = {

    }
    
    render(){
    return (
        <Fragment>
       <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search Countries" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </form>
        </Fragment>
    )
    }
}

export default Search