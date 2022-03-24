import React from 'react'

const PetTile = (props) => {
  const value = props.pet.image
  
  const result = props.pet.vaccinationStatus ? "Yes" : "No"

  return (
    <div>
      <img src={value} />
      <h2>Name: {props.pet.name} </h2>
      <p>Age: {props.pet.age}</p>
      <p>Vaccinated: {result}</p>

    </div>
  )
}

export default PetTile
