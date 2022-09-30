import React, { useState } from 'react'
import './TableHead.css'

const TableHead = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSort = accessor => {
        
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    }
    return (
        <thead>
            <tr>
                {
                    columns.map(column => {
                        const iconDirection = sortField === column.accessor && order === "asc"
                            ? "up"
                            : sortField === column.accessor && order === "desc"
                                ? "down"
                                : "default"

                        return <th key={column.accessor} onClick={() => handleSort(column.accessor)} >
                            <div>
                                <span>{column.label}</span>
                            <img src={`${process.env.PUBLIC_URL}/images/${iconDirection}.png`} alt="" />
                            </div>
                            
                        </th>
                    })
                }
            </tr>
        </thead>
    )
}

export default TableHead
