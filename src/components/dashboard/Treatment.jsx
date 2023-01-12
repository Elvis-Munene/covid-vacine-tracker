import React from 'react'
import TreatmentCard from './TreatmentCard'
import "./Treatment.css"

function Treatment() {
  return (
    <>
    <div className='treatment_class'>
    <div id='#treatment'><b>Treatment</b></div>
    <div className='treatment'>
    <TreatmentCard title={"Here is the title"} content={"Here is the conntent"}/>
    <TreatmentCard/>
    <TreatmentCard/>
    </div>
    </div>
    </>
  )
}

export default Treatment