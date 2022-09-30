import React from 'react'

const DateInput = (props) => {
    return (
        <>
            <label htmlFor={props.htmlFor}>{props.labelText}</label>
            <input id={props.id} type={props.type} name={props.name} onChange={props.onChange} value={props.dateOfBirth} />
        </>
    )
}

export default DateInput
