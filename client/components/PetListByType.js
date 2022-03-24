import React, { useState, useEffect } from "react"

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
  useEffect(() => {
    getPetList()
  }, [])
  console.log(listOfPets)
  const petList = listOfPets.pets.map(pet => {
    return <li key={pet.id}>{pet.name} </li>
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
