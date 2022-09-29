import React, {  useEffect, useState } from 'react'
import './Table.css'

import TableBody from '../TableBody/TableBody'
import TableHead from '../TableHead/TableHead'

const Table = ({employees}) => {

    const [sortedEmployees, setSortedEmployees] = useState([...employees])
    const columns = [
        { label: 'First Name', accessor: 'firstname' },
        { label: 'Last Name', accessor: 'lastname' },
        { label: 'Start Date', accessor: 'startDate' },
        { label: 'Department', accessor: 'department' },
        { label: 'Date of Birth', accessor: 'dateOfBirth' },
        { label: 'Street', accessor: 'street' },
        { label: 'City', accessor: 'city' },
        { label: 'State', accessor: 'state' },
        { label: 'Zip Code', accessor: 'zipCode' }
    ]

    useEffect(()=> {
        setSortedEmployees([...employees])
    },[employees])
    
    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...employees].sort((a, b) => {
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
