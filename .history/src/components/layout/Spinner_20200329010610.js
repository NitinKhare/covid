import React, { Fragment } from 'react'

function Spinner() {
    return (
        <Fragment>
            <img src={spinner} alt="Fetching Data" style ={{ width: '200px'}} />
        </Fragment>
    )
}

export default Spinner