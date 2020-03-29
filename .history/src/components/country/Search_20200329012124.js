import React, { Component,Fragment } from 'react'

export class Search extends Component{
    render(){
    return (
        <Fragment>
       <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </Fragment>
    )
    }
}

export default Search