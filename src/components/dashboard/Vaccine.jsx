import React from 'react'
import VaccineCard from './VaccineCard'
import './Vaccine.css'

function Vaccine() {
  return (
    <>
     <div className="vaccine_title"><b>Vaccines</b></div>
     <div className="vaccine">
     <VaccineCard/>
     <VaccineCard/>
     <VaccineCard/>
     <VaccineCard/>
     <VaccineCard/>
     </div>
     </>
  )
}

export default Vaccine