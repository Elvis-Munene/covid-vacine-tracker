import React from 'react'
import './TreatmentCard.css'

function TreatmentCard( {title, content}) {
  return (
  <>
   <div className='treatment'>
        {/* <div className='treatment_title'>
            {title}
        </div>
        <div className='treatment_content'>
           <p>{content}</p>

        </div> */}

<div className="card  mb-3">
    <div className="card">
      <div className="card-body">
        Treatment Name:<h5 className="card-title">{title}</h5>
        Treatment Category:<p className="card-text"><h6>{content}</h6></p>
      
      </div>
    </div>
  </div>

    </div>
  </>
  )
}

export default TreatmentCard