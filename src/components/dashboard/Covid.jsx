import React from 'react'
import CasesCard from './CasesCard'
import "./Covid.css"

function Covid() {
  return (
    <>
    <div><b>This Section Covers the covid component</b></div>
    <div className='covid'>
       
    <div><CasesCard/></div>
    <div><CasesCard/></div>
    <div><CasesCard/></div>
    <div><CasesCard/></div>
    </div>
    </>
  )
}

export default Covid