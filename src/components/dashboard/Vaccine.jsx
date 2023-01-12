import React from 'react'
import VaccineCard from './VaccineCard'
import './Vaccine.css'

function Vaccine() {
  return (
    <>
    <div className="vaccine_class">
     <div className="vaccine_title" id='#vaccine'><b>Vaccines</b></div>
     <div className="vaccine">
     <VaccineCard title={"Here goes the title"} content="Here goes the content"/>
     <VaccineCard/>
     <VaccineCard/>
     <VaccineCard/>
     <VaccineCard/>
     </div>
     </div>
     </>
  )
}

export default Vaccine