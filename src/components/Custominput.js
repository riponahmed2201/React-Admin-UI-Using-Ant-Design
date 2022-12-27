import React from 'react'

function Custominput(props) {

    const { type, label, i_id, i_class } = props;

    return (
        <div className='form-control mb-3'>
            <input type={type} className={`form-control ${i_class}`} id={i_id} placeholder={label} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

export default Custominput