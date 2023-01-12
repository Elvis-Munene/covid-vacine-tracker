import './App.css';
import Covid from './components/dashboard/Covid';
import Treatment from './components/dashboard/Treatment';
import Vaccine from './components/dashboard/Vaccine';
import Navbar from './components/navBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Covid/>
      <Vaccine/>
      <Treatment/>
    
    </div>
  );
}

export default App;
