import React, { Fragment } from 'react'
import spinner from './spinner.gif'

function Spinner() {
    return (
        <Fragment>
            <img src={spinner} alt="Fetching Data" style ={{ width: '200px', margin:'auto', display:'block'}} />
        </Fragment>
    )
}

export default Spinner