import React from "react"
import { Link } from "react-router-dom"

const PetTile = props => {
  let value = props.pet.image

  const result = props.pet.vaccinationStatus ? "Yes" : "No"

  return (
    <div>
      <Link to={`/pets/${props.pet.id}`}>
        <img className="pet-photo" src={value} />
      </Link>
      <Link to={`/pets/${props.pet.id}`}>
        <h2>Name: {props.pet.name} </h2>
      </Link>
      <p>Age: {props.pet.age}</p>
      <p>Vaccinated: {result}</p>
    </div>
  )
}

export default PetTile
