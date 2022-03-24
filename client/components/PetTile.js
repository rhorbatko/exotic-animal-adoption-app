import React from 'react'
import {Link} from 'react-router-dom'

const PetTile = (props) => {
  let value = props.pet.image
  console.log(props)
  
  const result = props.pet.vaccinationStatus ? "Yes" : "No"

  return (
    <div>
      <Link to={`/pet/${props.pet.id}`}><img src={value} /></Link>
      <Link to={`/pet/${props.pet.id}`}>
          <h1>{props.pet.name} </h1>
        </Link>
      <p>{props.pet.age}</p>
      <p>{result}</p>

    </div>
  )
}

export default PetTile
