import React from 'react'
import './DateInput.css'
const DateInput = (props) => {
    return (
        <>
            <label htmlFor={props.htmlFor}>{props.labelText}</label>
            <input id={props.id} type={props.type} name={props.name} onChange={props.onChange} value={props.value} placeholder="dd-mm-yyyy" />
        </>
    )
}

export default DateInput
