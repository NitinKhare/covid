import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Search from '../country/Search'
import {Link} from 'react-router-dom'
const Navbar= (props)=> {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" href="/"><FontAwesomeIcon icon = {faVirus} /> {props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link disabled" href="/links">Links</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/about">About</Link>
      </li>
    </ul>
    <Search setAlert = {props.setAlert} getCountryData={props.getCountryData} />
  </div>
</nav>
    );
  
}

export default Navbar;
