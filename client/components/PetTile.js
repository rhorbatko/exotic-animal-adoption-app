import React from 'react'
import {Link} from 'react-router-dom'

const PetTile = (props) => {
  console.log(props)
  let result = props.pet.vaccinationStatus ? "yes" : "no"
  return (
    <div>
      <Link to={`/pet/${props.id}`}><img src={props.pet.image} /></Link>
      <Link to={`/pet/:id`}>
          <h1>{props.pet.name} </h1>
        </Link>
      <p>{props.pet.age}</p>
      <p>{result}</p>

    </div>
  )
}

export default PetTile
