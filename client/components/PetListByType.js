import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import PetTile from "./PetTile"

const PetListByType = props => {
  const [listOfPets, setListOfPets] = useState({ pets: [] })

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
      setListOfPets(responseBody.petType)
    } catch (error) {
      console.error(`Error in fetch:${error.message}`)
    }
  }

  let location = useLocation()
  console.log(location)

  useEffect(() => {
    getPetList()
  }, [location])
  const petList = listOfPets.pets.map(pet => {
    return <PetTile key={pet.id} pet={pet} />
  })
  return (
    <>
      <h1>{listOfPets.name}</h1>
      <p>{listOfPets.description}</p>
      <ul>{petList}</ul>
    </>
  )
}

export default PetListByType
