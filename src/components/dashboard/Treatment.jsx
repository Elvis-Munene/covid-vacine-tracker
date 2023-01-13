import React from 'react'
import TreatmentCard from './TreatmentCard'
import "./Treatment.css"

function Treatment({treatmentStats}) {
    console.log(treatmentStats)
  return (
    <>
    <div className='treatment_class'>
    <div id='#treatment'><b>Treatment</b></div>
    <div className='treatment_content'>
    <div className='treatment_component_1'><TreatmentCard title={"Here is the title"} content={"Here is the conntent"}/></div>
    <div className='treatment_component_1'><TreatmentCard title={"Here is the title"} content={"Here is the conntent"}/></div>
    <div className='treatment_component_1'><TreatmentCard title={"Here is the title"} content={"Here is the conntent"}/></div>
    </div>
    </div>
    </>
  )
}

export default Treatment