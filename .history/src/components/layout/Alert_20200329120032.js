import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

 function Alert({alert}) {
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
           <FontAwesomeIcon icon = {faVirus} /> {alert.msg}
        </div>
        )
    )
}

export default Alert