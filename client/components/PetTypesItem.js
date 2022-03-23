import React from "react"
import { Link } from "react-router-dom"

const PetTypesItem = props => {
  const { id, name, image, description } = props.value
  return (
    <div>
      <li>
        <Link to={`/petTypes/${id}`}>
          <h1>{name} </h1>
        </Link>
      </li>
      <img src={image} />
      <h3>{description}</h3>
    </div>
  )
}

export default PetTypesItem
