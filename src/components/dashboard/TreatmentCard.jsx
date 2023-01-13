import React from 'react'
import './TreatmentCard.css'

function TreatmentCard( {title, content}) {
  return (
  <>
   <div className='treatment'>
        <div className='treatment_title'>
            {title}
        </div>
        <div className='treatment_content'>
           <p>{content}</p>

        </div>

    </div>
  </>
  )
}

export default TreatmentCard