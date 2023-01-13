import './App.css';
import Covid from './components/dashboard/Covid';
import Treatment from './components/dashboard/Treatment';
import React,  { useState, useEffect } from 'react';
import Vaccine from './components/dashboard/Vaccine';
import Navbar from './components/navBar/Navbar';

function App() {

  const [covidData, setCovidData] = useState();

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
  



  return (
    <div className="App">
      <Navbar/>
      <Covid covidStats={covidData}/>
      <Vaccine/>
      <Treatment/>
    
    </div>
  );
}

export default App;
