import React from "react";


function VaccineCard({ title, content, phase }) {
  return (
    <>
    

     
  <div className="card text-bg-info mb-3">
    <div className="card">
      <div className="card-body">
        Vaccine Name:<h5 className="card-title">{title}</h5>
        Vaccine Category:<p className="card-text"><h6>{content}</h6></p>
        Vaccine Phase:<h5 className="card-title">{phase}</h5>
        

      
      </div>
    </div>
  </div>

    </>
  );
}

export default VaccineCard;
