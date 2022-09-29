import React, { useContext, useEffect, useState } from 'react'
import './Table.css'

import { EmployeeContext } from '../../context/EmployeeContext'
import TableBody from '../TableBody/TableBody'
import TableHead from '../TableHead/TableHead'

const Table = () => {
    const employeeContext = useContext(EmployeeContext)
    const [sortedEmployees, setSortedEmployees] = useState([...employeeContext.employees])
    const columns = [
        { label: 'first name', accessor: 'firstname' },
        { label: 'last name', accessor: 'lastname' },
        { label: 'start date', accessor: 'startDate' },
        { label: 'department', accessor: 'department' },
        { label: 'date of birth', accessor: 'dateOfBirth' },
        { label: 'street', accessor: 'street' },
        { label: 'city', accessor: 'city' },
        { label: 'state', accessor: 'state' },
        { label: 'zip code', accessor: 'zipCode' }
    ]

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...employeeContext.employees].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setSortedEmployees(sorted);
        }
    };

    return (
        <table>
            <TableHead columns={columns} handleSorting={handleSorting} />
            <TableBody employees={sortedEmployees} columns={columns} />
        </table>
    )
}

export default Table
