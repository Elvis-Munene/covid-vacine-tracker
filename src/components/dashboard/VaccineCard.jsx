import React from 'react'
import './VaccineCard.css'

function VaccineCard({title, content}) {
  return (
    <>
   
    <div className='vaccine'>
        <div className='vaccine_title'>
            {title}
        </div>
        <div className='vaccine_content'>
            <p>{content}</p>
        </div>

    </div>

    </>
  )
}

export default VaccineCard