import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 function Alert({alert}) {
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
           <FontAwesomeIcon className="fa fa-info-circle" icon="calendar" title="magic" /> {alert.msg}
        </div>
        )
    )
}

export default Alert