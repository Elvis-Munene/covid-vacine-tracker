import React from 'react'
import TreatmentCard from './TreatmentCard'
import "./Treatment.css"

function Treatment({treatmentStats}) {
  console.log(treatmentStats)
  return (
    <>
    <div id='treatment'><b>The following are some of the covid 19 treatments that have been done</b></div>
    <div className='treatment_class'>

   
         { treatmentStats?.map((treatment, index) => {
    return(

<TreatmentCard
   key={index}
   title={treatment.trimedName}
   content={treatment.category}

/>
        )

})}
    </div>
    </>
  )
}

export default Treatment