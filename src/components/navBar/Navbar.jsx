import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div>
        <nav class="navbar bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand">Logo</a>
    

    <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">COVID-19</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="vaccine">VACCINE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="treatment">TREATMENT</a>
        </li>
  
    
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

    </div>
  
  )
}

export default Navbar