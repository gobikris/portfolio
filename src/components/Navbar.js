import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <div>
      
      <div className='container'>
      <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand signature1 rose hand fw-bold" name="home">G k</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex gap-4 ms-auto fw-bold text-center " >
        <li class="nav-item">
        
          <a class="nav-link rose hand" aria-current="page"  ><Link activeClass="active" to="Home"  smooth={true}  duration={500}>
        Home
        </Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link rose hand">
          <Link activeClass="active" to="skill"  smooth={true}  duration={500}>
        Skill
        </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link rose hand" >
          <Link activeClass="active" to="project"  smooth={true}  duration={500}>
        Project
        </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link rose hand">
          <Link activeClass="active" to="education"  smooth={true}  duration={500}>
        Education
        </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link rose hand" >
          <Link activeClass="active" to="about"  smooth={true}  duration={500}>
        About
        </Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link rose hand" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-expanded="false">
          <Link activeClass="active" to="contact"  smooth={true}  duration={500}>
        Contact
        </Link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

</div>
  )
}
