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
            {content}
        </div>

    </div>

    </>
  )
}

export default VaccineCard