import React from 'react'
import VaccineCard from './VaccineCard'
import './Vaccine.css'

function Vaccine({vaccineStats}) {




console.log(vaccineStats);





  return (
    <>
    <div className="vaccine_class">
     <div className="vaccine_title" id='vaccine'><b>The following are some of the various vaccine names and their categories</b></div>
     <div className="vaccine_component">
    
     { vaccineStats?.map((vaccine, index) => {
    return(

<VaccineCard
   key={index}
   title={vaccine.trimedName}
   content={vaccine.category}
   phase={vaccine.phase}

/>
        )

})}
    
     </div>
     </div>
     </>
  )
}

export default Vaccine