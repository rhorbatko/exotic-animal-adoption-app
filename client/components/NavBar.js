import React from "react"
import { Link } from "react-router-dom"

const NavBar = props => {
  return (
    <div>
      <div className="top-bar">
        <Link to="/pet-types">Animal Types</Link>
        <Link to="/pet-types/1">Mammals</Link>
        <Link to="/pet-types/2">Reptiles</Link>
        <Link to="/pet-types/3">Fish</Link>
        <Link to="/pet-types/4">Birds</Link>
      </div>
    </div>
  )
}

export default NavBar
