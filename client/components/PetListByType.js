import React, { useState, useEffect } from "react"
import PetTile from "./PetTile"

const PetListByType = props => {
  const [petType, setpetType] = useState({ pets: [] })

  const getPetList = async () => {
    const id = props.match.params.id
    try {
      const response = await fetch(`/api/v1/pet-types/${id}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setpetType(responseBody.petType)
    } catch (error) {
      console.error(`Error in fetch:${error.message}`)
    }
  }

  useEffect(() => {
    getPetList()
  }, [])

  const petList = petType.pets.map(pet => {
    return <PetTile key={pet.id} pet={pet}/> 
  })
  
  return (
    <>
      <h1>{petType.name}</h1>
      <p>{petType.description}</p>
      <ul>{petList}</ul>
    </>
  )
}

export default PetListByType
