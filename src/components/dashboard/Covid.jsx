import React, {useEffect, useState} from 'react'
import CasesCard from './CasesCard'
import "./Covid.css"

function Covid({covidStats}) {
    
const [worldStats, setWorldStats] = useState({
    TotalCases:1,
    NewCases:2,
    ActiveCases:4,
    Seroius_critical:5,
    TotalDeath:6,
    NewDeaths:7
});

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bb33d9c721mshe4e5edcfc150241p11ef22jsn4a68c73f9ffd',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};

useEffect(()=>{
    fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`, options)
    .then((response)=> response.json())
    .then((response)=> setWorldStats(response[0]))  
},[])


console.log(worldStats);
   

  return (
    <>
    <div className='covid_class'>
    <div id='#covid'><b>This Section Covers the covid component</b></div>
    <div className='covid'>
          {/* { covidStats?.map((covid, index) => {
    return(

<CasesCard
   key={index}
   title={covid.Newcases}
   number={covid.Totalcases}

/>
        )

})}  */}
       
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"Total Cases"} number={worldStats.TotalCases}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"New cases"} number={worldStats.NewCases}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"Active cases"} number={worldStats.active}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"Critical"} number={worldStats.critical}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"TOtal Deaths"} number={worldStats.deaths}/></div>
    <div className='covid_component_1'><CasesCard logo={"This is the logo section"} title={"New Deaths"} number={worldStats.newdeaths}/></div>  

    </div>
    </div>
    </>
  )
}

export default Covid