import React from 'react'
import CasesCard from './CasesCard'
import "./Covid.css"

function Covid() {
  return (
    <>
    <div id='#covid'><b>This Section Covers the covid component</b></div>
    <div className='covid'>
       
    <div><CasesCard logo={"This is the logo section"} title={"This is the title section"} number={"This is the number section"}/></div>
    <div><CasesCard/></div>
    <div><CasesCard/></div>
    <div><CasesCard/></div>
    </div>
    </>
  )
}

export default Covid