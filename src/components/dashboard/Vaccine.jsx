import React from 'react'
import VaccineCard from './VaccineCard'
import './Vaccine.css'

function Vaccine() {
  return (
    <>
    <div className="vaccine_class">
     <div className="vaccine_title" id='#vaccine'><b>Vaccines</b></div>
     <div className="vaccine_component">
     <div className='vaccine_component_1'><VaccineCard title={"Here goes the title"} content="Here goes the content"/></div>
     <div className='vaccine_component_1'><VaccineCard title={"Here goes the title"} content="Here goes the content"/></div>
     <div className='vaccine_component_1'><VaccineCard title={"Here goes the title"} content="Here goes the content"/></div>
     <div className='vaccine_component_1'><VaccineCard title={"Here goes the title"} content="Here goes the content"/></div>
     <div className='vaccine_component_1'><VaccineCard title={"Here goes the title"} content="Here goes the content"/></div>
     </div>
     </div>
     </>
  )
}

export default Vaccine