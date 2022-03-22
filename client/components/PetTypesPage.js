import React, { useState, useEffect } from 'react'



const PetTypesPAge = (props) => {
  const [petTypes, setPetTypes] = useState([])

  const getPetTypes = async () => {
    try {
      const response = await fetch("/api/v1/pet_types")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setPetTypes(responseBody)
    } catch(err) {
      console.error(`Error in Fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    getPetTypes()
  }, [])

  const petTypesItem = petTypes.map((petType) => {
    return (
      <PetTypesItem
        key={petType.id}
        {...petType}
      />
    )
  })

  return (
    <div>
      <h1>My Book List</h1>
      <ul className="books">
        {petTypesItem}
      </ul>
    </div>
  )
}

export default BooksList
