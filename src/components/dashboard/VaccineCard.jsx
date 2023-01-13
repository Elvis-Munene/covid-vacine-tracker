import React from "react";
import "./VaccineCard.css";

function VaccineCard({ title, content }) {
  return (
    <>
    
        {/* <div className='vaccine_title'>
           <h5>{title}</h5>
        </div>
        <div className='vaccine_content'>
            <p>{content}</p>
        </div> */}
    
  <div className="card  mb-3">
    <div className="card">
      <div className="card-body">
        Vaccine Name:<h5 className="card-title">{title}</h5>
        Vaccine Category:<p className="card-text"><h6>{content}</h6></p>
      
      </div>
    </div>
  </div>
  
  {/* <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    
      </div>
    </div>
  </div> */}

    </>
  );
}

export default VaccineCard;
