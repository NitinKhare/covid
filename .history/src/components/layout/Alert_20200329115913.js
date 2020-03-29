import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 function Alert({alert}) {
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
           <FontAwesomeIcon className="fa-fw" icon="calendar" title="magic" /> {alert.msg}
        </div>
        )
    )
}

export default Alert