import React, { useContext, useEffect, useState } from 'react'
import './EmployeeList.css'
import { Link } from 'react-router-dom'
import { EmployeeContext } from '../../context/EmployeeContext'
import Table from '../Table/Table'
import Pagination from '../Pagination/Pagination'

const EmployeeList = () => {
    const employeeContext = useContext(EmployeeContext)
    const employees = employeeContext.employees
    const [filteredEmployees, setFilteredEmployees] = useState([])
    // const [filteredPeople, setFilteredPeople] = useState([])
    const [perPage, setPerPage] = useState(10)
    const [totalPageCount, setTotalPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [startIndex, setStartIndex] = useState(1)
    const [endIndex, setEndIndex] = useState(0)
    const [paginatedEmployees, setPaginatedEmployees] = useState(filteredEmployees)

    const handlePerPageChange = e => {
        e.preventDefault()
        setPerPage(() => { return parseInt(e.target.value) })
        setCurrentPage(1)
    }
    useEffect(() => {
        setFilteredEmployees(employees)
    }, [])

    useEffect(() => {
        setTotalPageCount(() => { return Math.ceil(filteredEmployees.length / perPage) })
        setStartIndex(() => { return (currentPage - 1) * perPage })
        setEndIndex(() => { return (currentPage - 1) * perPage + perPage })
        setPaginatedEmployees(() => {
            return filteredEmployees.slice(startIndex, endIndex)
        })
    }, [perPage, currentPage, startIndex, endIndex, filteredEmployees, totalPageCount])

    const handleSearchChange = e => {
        e.preventDefault()
        setCurrentPage(1)
        const filteredPeople = employees.filter(employee => {
            
            let isValid = false
            for(let property in employee){
                if(employee[property].toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
                    isValid = true
                }    
            }
            if(isValid) return employee
        })
        setFilteredEmployees(() => [...filteredPeople])
    }

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div className="filters">
                <form>
                    <label htmlFor="entriesLength">
                        Show {' '}
                        <select name="entriesLength" id="entriesLength" onChange={handlePerPageChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                        </select>
                        {' '} entries
                    </label>
                </form>
                <form className='search__form'>
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" id="search" onChange={handleSearchChange} />
                </form>
            </div>
            <Table employees={paginatedEmployees} />
            <Pagination
                currentPage={currentPage}
                startIndex={startIndex}
                endIndex={endIndex}
                perPage={perPage}
                total={employees.length}
                totalPages={totalPageCount}
                setCurrentPage={setCurrentPage}
                filteredEmployees={filteredEmployees}
            />
            <Link to="/">Home</Link>
        </div>
    )
}

export default EmployeeList
