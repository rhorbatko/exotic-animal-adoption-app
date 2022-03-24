import React from "react"
import { Link } from "react-router-dom"

const PetTypesItem = props => {
  const { id, name, image, description } = props.value
  return (
    <div>
      <li>
        <Link to={`/pet-types/${id}`}>
          <h1>{name} </h1>
        </Link>
      </li>
      <Link to={`/pet-types/${id}`}><img src={`/${image}`} /></Link>
      <h3>{description}</h3>
    </div>
  )
}

export default PetTypesItem
