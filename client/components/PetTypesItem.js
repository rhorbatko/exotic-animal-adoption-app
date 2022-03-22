import React from "react"
import { Link } from "react-router-dom"

const PetTypesItem = ({ id, name, description, img_url }) => {
  return (
    <div>
      <li><Link to={`/petTypes/${id}`}>
        <h1>{name} </h1>
      </Link></li>
      <img src={img_url} />
      <h3>{description}</h3>
    </div>
  )
}

export default PetTypesItem