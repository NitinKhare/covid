import React from 'react'

export default function Alert() {
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert}
        </div>
        )
    )
}
