import React from 'react'
import TreatmentCard from './TreatmentCard'
import "./Treatment.css"

function Treatment() {
  return (
    <>
    <div><b>Treatment</b></div>
    <div className='treatment'>
    <TreatmentCard/>
    <TreatmentCard/>
    <TreatmentCard/>
    </div>
    </>
  )
}

export default Treatment