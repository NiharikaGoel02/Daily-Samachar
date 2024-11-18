import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">DailySamachar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
          <li class="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
          <li class="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li class="nav-item"><Link className="nav-link" to="/general">General</Link></li>
          <li class="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
          <li class="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
          <li class="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          <li class="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar


