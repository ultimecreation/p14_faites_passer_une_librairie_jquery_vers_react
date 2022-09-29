import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { EmployeeContext } from '../../context/EmployeeContext'
import Table from '../Table/Table'

const EmployeeList = () => {
    const employeeContext = useContext(EmployeeContext)
    const employees = employeeContext.employees
    
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            {employees.length > 0 && <Table />}
            <Link to="/">Home</Link>
        </div>
    )
}

export default EmployeeList
