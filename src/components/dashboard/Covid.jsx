import React, {useEffect, useState} from 'react'
import CasesCard from './CasesCard'
import "./Covid.css"
import { BiPlusMedical } from 'react-icons/bi'; 
import {MdAddchart} from 'react-icons/md';
import { BsCardChecklist } from 'react-icons/bs'; 
import { GrStatusCritical } from 'react-icons/gr'; 
import { GiDeathSkull } from 'react-icons/gi'; 
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function Covid({covidStats}) {

const [counterOn, setCounterOn] = useState(false);    
const [worldStats, setWorldStats] = useState({
    TotalCases:1,
    NewCases:2,
    ActiveCases:4,
    Serious_Critical:5,
    TotalDeaths:6,
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
    <div id='#covid'><b>The following is the current covid-19 statistics</b></div>
  
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
     <div className='left'> 
    <div className='covid_component_1'><CasesCard logo={<BiPlusMedical/>} title={"Total Cases"} number={ <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    
        {counterOn && <CountUp start={0} end={worldStats.TotalCases} duration={2} delay={0}/>} +
        
    </ScrollTrigger>}/></div>
    <div className='covid_component_2'><CasesCard logo={<MdAddchart/>} title={"New cases"} number={<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    
        {counterOn && <CountUp start={0} end={worldStats.NewCases} duration={2} delay={0}/>} +
        
    </ScrollTrigger>}/></div>
    <div className='covid_component_3'><CasesCard logo={<BsCardChecklist/>} title={"Active cases"} number={<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    
        {counterOn && <CountUp start={0} end={worldStats.ActiveCases} duration={2} delay={0}/>} +
        
    </ScrollTrigger>}/></div>
    </div> 
    <div className='right'>
    <div className='covid_component_4'><CasesCard logo={<GrStatusCritical/>} title={"Critical"} number={<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    
        {counterOn && <CountUp start={0} end={worldStats.Serious_Critical} duration={2} delay={0}/>} +
        
    </ScrollTrigger>}/></div>
    <div className='covid_component_5'><CasesCard logo={<GiDeathSkull/>} title={"Total Deaths"} number={<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    
        {counterOn && <CountUp start={0} end={worldStats.TotalDeaths} duration={2} delay={0}/>} +
        
    </ScrollTrigger>}/></div>
    <div className='covid_component_6'><CasesCard logo={<div><MdAddchart/><GiDeathSkull/></div>} title={"New Deaths"} number={<ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    
        {counterOn && <CountUp start={0} end={worldStats.NewDeaths} duration={2} delay={0}/>} +
        
    </ScrollTrigger>}/></div>  
    </div>
    </div>
    </div>
    </>
  )
}

export default Covid