import React from 'react'

 function Alert({alert}) {
    return (
        alert !== null && (
        <div className={`alert alert-${props.alert.type}`}>
            <i className='fas fa-info-circle' /> {props.alert.msg}
        </div>
        )
    )
}

export default Alert