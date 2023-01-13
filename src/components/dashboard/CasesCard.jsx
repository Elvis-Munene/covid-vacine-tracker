import React from 'react'
import './CasesCard.css'

function CasesCard({logo,title, number}) {
  return (
    <div className='case_card'>
        <div className='case_card_logo'>
            {logo}

            </div>
        <div class='covid_card_results'>
        <div className='case_card_title'>{title}
        </div>
        <div className='case_card_number'>{number}</div>
        </div>
    </div>
  )
}

export default CasesCard