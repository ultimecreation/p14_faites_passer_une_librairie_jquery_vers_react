import React from 'react'
import './SelectInput.css'

const SelectInput = (props) => {
    return (
        <>
            <label htmlFor={props.htmlFor}>{props.labelText}</label>
            <select name={props.name} id={props.id} onChange={props.onChange} value={props.value} className="select" >
                {props.optionValues.map((item, index) => {
                    return <option key={index} value={item.abbreviation}>{item.name}</option>
                })}
            </select>
        </>
    )
}

export default SelectInput
