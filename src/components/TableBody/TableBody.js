import React from 'react'
import './TableBody.css'

const TableBody = ({ employees, columns }) => {
    return (
        <tbody>
            {employees.map((employee, index) => {
                return (
                    <tr key={index}>
                        {
                            columns.map(column => {
                                return <td key={column.accessor}>
                                    {employee[column.accessor] ?? '__'}
                                </td>
                            })
                        }
                    </tr>
                )
            })
            }
        </tbody>
    )
}

export default TableBody
