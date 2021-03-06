import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import Search from '../country/Search'
const Navbar= (props)=> {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/"><FontAwesomeIcon icon = {faVirus} /> {props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link disabled" href="/links">Links</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/about">About</a>
      </li>
    </ul>
<Search />
  </div>
</nav>
    );
  
}

export default Navbar;
