import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div>
        <nav class="navbar bg-primary">
  <div className="container-fluid">
    <div className="navbar-brand">Logo</div>
    

    <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">COVID-19</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#vaccine">VACCINE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#treatment">TREATMENT</a>
        </li>
  
    
  </div>
</nav>

    </div>
  
  )
}

export default Navbar