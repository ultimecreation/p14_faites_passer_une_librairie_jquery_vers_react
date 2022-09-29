import { createContext, useState } from "react";

export const EmployeeContext = createContext()

export const EmployeeContextProvider = props => {
    const [employees, setEmployees] = useState([])

    const addEmployee = employee => {

        setEmployees(prevEmployees => {
            return [
                ...prevEmployees
                , employee
            ]
        })
        storeEmployee(employee)
    }

    const storeEmployee = employee => {
        const employeesStored = localStorage.getItem('employees') !== null
            ? JSON.parse(localStorage.getItem('employees'))
            : []
        const updatedEmployees = [...employeesStored, employee]
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    const getStoredEmployees = () => {
        if (localStorage.getItem('employees') !== null) {
            const storedEmployees = JSON.parse(localStorage.getItem('employees'))

            setEmployees(() => {
                return [
                    ...storedEmployees
                ]
            })
        }
    }


    return <EmployeeContext.Provider value={{
        employees,
        addEmployee,
        getStoredEmployees


    }}>
        {props.children}
    </EmployeeContext.Provider>
}