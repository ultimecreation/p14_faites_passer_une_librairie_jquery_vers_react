import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import "./CreateEmployee.css";
import { Modal } from "ultime-modal";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import { EmployeeContext } from '../../context/EmployeeContext';
import DateInput from '../DateInput/DateInput';
import SelectInput from '../SelectInput/SelectInput';
const CreateEmployee = () => {
    const initialState = {
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    }

    const myModalStyle = {
        background: "white",
        position: "relative",
        left: 0,
        right: 0,
        top: "25%",
        bottom: "75%",
        width: "300px",
        margin: "auto",
        borderRadius: "5px",
        padding: "10px"
    }

    const myModalButtonStyle = {
        color: "white",
        background: 'black',
        borderRadius: '50%',
        fontWeight: "bold",
        position: "absolute",
        right: "-10px",
        top: "-10px",
        border: "2px solid black",
        cursor: "pointer"
    }

    const [employee, setEmployee] = useState(initialState)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalContent, setModalContent] = useState()
    const { addEmployee } = useContext(EmployeeContext)



    const handleChange = e => {
        setEmployee(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })

    }

    const handleSubmit = e => {
        e.preventDefault()
        addEmployee(employee)
        setModalContent("Employee created!")
        setModalIsOpen(true)
        setEmployee(initialState)
    }
    return (
        <div className='create-employee'>
            <div className="title">
                <h1>HRnet</h1>
            </div>

            <div className="container">
                <Link to="employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit} id="create-employee">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" name="firstname" onChange={handleChange} value={employee.firstname} />

                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" name="lastname" onChange={handleChange} value={employee.lastname} />

                    <DateInput 
                        htmlFor="dateOfBirth" 
                        labelText="dateOfBirth"
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        onChange={handleChange}
                        value={employee.dateOfBirth}
                    />

                    <DateInput
                        htmlFor="startDate"
                        labelText="startDate"
                        type="date"
                        id="startDate"
                        name="startDate"
                        onChange={handleChange}
                        value={employee.startDate}
                    />
                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" onChange={handleChange} value={employee.street} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" onChange={handleChange} value={employee.city} />

                        <SelectInput 
                            htmlFor="state"
                            labelText="State"
                            id="state"
                            name="state"
                            optionValues={states}
                            onChange={handleChange}
                            value={employee.startDate}
                        
                        />
                        <label htmlFor="zipCode">Zip Code</label>
                        <input id="zipCode" type="number" name="zipCode" onChange={handleChange} value={employee.zipCode} />
                    </fieldset>

                    <SelectInput 
                            htmlFor="department"
                            labelText="Department"
                            id="department"
                            name="department"
                            optionValues={departments}
                            onChange={handleChange}
                            value={employee.department}
                        
                        />
                    <button className='submit' >Save</button>

                </form>
            </div>
            <Modal
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
                modalContent={modalContent}
                myModalStyle={myModalStyle}
                myModalButtonStyle={myModalButtonStyle}
            />
        </div>
    )
}

export default CreateEmployee
