import React, { useEffect, useState } from 'react'
import './Pagination.css' 

const Pagination = (props) => {

  const [prevLinkDisabled, setPrevLinkDisabled] = useState(false)
 const [nextLinkDisabled, setNextLinkDisabled] = useState(false)

 useEffect(()=>{
  setPrevLinkDisabled(false)
    setNextLinkDisabled(false)
 },[props.totalPages])
  const handlePrevPageClick = ()=>{
    setPrevLinkDisabled(()=>props.currentPage <= 1 ? true: false)
    setNextLinkDisabled(()=>props.currentPage <  props.totalPages? false: true)
    if(props.currentPage > 1) props.setCurrentPage(props.currentPage - 1)
  }
  const handleNextPageClick = ()=>{
    setPrevLinkDisabled(()=> props.currentPage <=  1 ? true: false)
    setNextLinkDisabled(()=> props.currentPage <  props.totalPages? false: true)
    if(props.currentPage < props.totalPages ) props.setCurrentPage(props.currentPage + 1)
    
  }

  return ( 
    <div className='pagination'>
      <div className="count">
        Showing {props.startIndex+1} to {parseInt(props.endIndex) } of {props.total} entries {props.totalPages} pages
      </div>
      <div className="pagination__links">
        <button onClick={handlePrevPageClick} disabled={prevLinkDisabled}>Previous</button>
        <button>{props.currentPage}</button>
        <button onClick={handleNextPageClick}  disabled={nextLinkDisabled} >Next</button>
      </div>
    </div>
  )
}

export default Pagination