import React from "react";
import VaccineCard from "./VaccineCard";
import "./Vaccine.css";

function Vaccine({ vaccineStats }) {
  console.log(vaccineStats);

 

  return (
    <>
      <div className="vaccine_class">
        <div className="vaccine_title" id="#vaccine">
          <b>Vaccines</b>
        </div>
        <div className="vaccine_component">
          {vaccineStats.map((vaccine, index) => {
            return (
              <VaccineCard
                key={index}
                title={vaccine.trimedName}
                content={vaccine.category}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Vaccine;
