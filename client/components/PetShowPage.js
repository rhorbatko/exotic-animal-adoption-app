import React, {useState, useEffect} from 'react'

const PetShowPage = () => {
  const [pets, setPets] = useState([])

 
  const getPet = async () => {
    const id = props.match.params.id
    try {
      const response = await fetch(`/api/v1/pets/${id}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPets(responseBody)
    } catch (error) {
      console.error(`Error in fetch:${error.message}`)
    }
  }
  useEffect(() => {
    getPet()
  }, [])

  const newPet = pets.map(pet => {
    return <li>key={pet.id}</li>
  })

  return (
    <div></div>
  )
}

export default PetShowPage