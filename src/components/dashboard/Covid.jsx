import React from 'react'
import CasesCard from './CasesCard'
import "./Covid.css"

function Covid({covidStats}) {
    console.log(covidStats)
 
   

  return (
    <>
    <div className='covid_class'>
    <div id='#covid'><b>This Section Covers the covid component</b></div>
    <div className='covid'>
       
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"Total cases"} number={"70000000000"}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"New cases"} number={"70000000000"}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"Active cases"} number={"70000000000"}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"Critical"} number={"70000000000"}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"TOtal Deaths"} number={"70000000000"}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"New Deaths"} number={"70000000000"}/></div>
    </div>
    </div>
    </>
  )
}

export default Covid