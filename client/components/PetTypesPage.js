import React, { useState, useEffect } from "react"
import PetTypesItem from "./PetTypesItem"
const PetTypesPage = props => {
  const [petTypes, setPetTypes] = useState([])

  const getPetTypes = async () => {
    try {
      const response = await fetch("/api/v1/pet-types")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPetTypes(responseBody.petTypes)
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPetTypes()
  }, [])

  const petTypesData = petTypes.map(value => {
    return <PetTypesItem key={value.id} value={value} />
  })
  return (
    <div>
      <h1>Exotic Animal Shelter</h1>
      <ul>{petTypesData}</ul>
    </div>
  )
}

export default PetTypesPage
