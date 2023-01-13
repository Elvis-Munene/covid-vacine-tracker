import React from 'react'
import VaccineCard from './VaccineCard'
import './Vaccine.css'

function Vaccine({vaccineStats}) {




// const render_articles = vaccineStats.map(
//     (articlesRow) =>
      
//         <div className="articles-row">
//           <h1>{articlesRow.trimedName}</h1>
//           <div>
//             <h2>Incident type:{articlesRow.category}</h2>
//           </div>
//         </div>
      
//   );






  return (
    <>
    <div className="vaccine_class">
     <div className="vaccine_title" id='vaccine'><b>Vaccines</b></div>
     <div className="vaccine_component">
    
     { vaccineStats?.map((vaccine, index) => {
    return(

<VaccineCard
   key={index}
   title={vaccine.trimedName}
   content={vaccine.category}

/>
        )

})}
    
     </div>
     </div>
     </>
  )
}

export default Vaccine