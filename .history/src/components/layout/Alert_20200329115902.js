import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 function Alert({alert}) {
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert.msg}
        </div>
        )
    )
}

export default Alert