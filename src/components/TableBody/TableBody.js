import React from 'react'
import './TableBody.css'

const TableBody = ({ employees, columns }) => {
    return (
        <tbody>
            {employees.length > 0
                ? employees.map((employee, index) => {
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
                :<tr ><td valign="top" colSpan="9" className="dataTables_empty">No data available in table</td></tr>
            }
        </tbody>
    )
}

export default TableBody
