import './App.css';
import Covid from './components/dashboard/Covid';
import Treatment from './components/dashboard/Treatment';
import React,  { useState, useEffect } from 'react';
import Vaccine from './components/dashboard/Vaccine';
import Navbar from './components/navBar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  const [covidData, setCovidData] = useState();
  const [vaccineData, setVaccineData] = useState();
  const [treatmentData, setTreatmentData] = useState();
  const [treatmentFullData, setTreatmentFullData] = useState();
  const [vaccineFullData, setvaccineFullData] = useState();


console.log(treatmentFullData);


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
      .then((response)=> setCovidData(response))  
  },[])


  useEffect(()=>{
    fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines`, options)
    .then((response)=> response.json())
    .then((response)=> {
      const limtedData = response.slice(0,10)
      setVaccineData(limtedData)
    })   
  },[])



  useEffect(()=>{
    fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-vaccines`, options)
    .then((response)=> response.json())
    .then((response)=> {
    setvaccineFullData(response)
    })   
  },[])
    

  useEffect(()=>{
    fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-treatment/`, options)
    .then((response)=> response.json())
    .then((response)=> {
      const limtedData = response.slice(0,10)
      setTreatmentData(limtedData)
    })  
},[])



useEffect(()=>{
  fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-all-treatment/`, options)
  .then((response)=> response.json())
  .then((response)=> {
    setTreatmentFullData(response)
  })  
},[])




  return (
    <div className="App">
      <Navbar/>
      <Covid covidStats={covidData}/>
      <Vaccine vaccineStats={vaccineData} vacxData={vaccineFullData}/>
      <Treatment treatmentStats={treatmentData} treatData={treatmentFullData}/>
      <Footer/>
    
    </div>
  );
}

export default App;
