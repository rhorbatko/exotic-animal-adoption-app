
import React, {useState, useEffect} from 'react'
import AdoptionApplicationForm from './AdoptionApplicationForm'


const PetShowPage = (props) => {
  const [pet, setPet] = useState([])
  const [clickButton, setClickButton] = useState(false)
  
  let adoptionForm = null;

  const handleClick = (event) =>{
   event.preventDefault()
    setClickButton(true)
  }

  if (clickButton) {
    adoptionForm = <AdoptionApplicationForm petId={pet.id}/>

  }

  const vaccinated =  pet.vaccinationStatus ? "Yes" : "No"
 
  const getPet = async () => {
    console.log(props)
    const id = props.match.params.id
    try {
      const response = await fetch(`/api/v1/pets/${id}`)
      
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      
      setPet(responseBody.pet)
    } catch (error) {
      console.error(`Error in fetch:${error.message}`)
    }
  }
  useEffect(() => {
    getPet()
  }, [])

    console.log(pet)


  return (
    <div>
      <img src={pet.image} />
      <h1>Name: {pet.name}</h1>
      <p>Age: {pet.age}</p>
      <p>Vaccinated: {vaccinated}</p>
      <p>Adoption Story: {pet.adoptionStory}</p>
      <button className="button" onClick={handleClick}>Adopt Me!!</button>
      {adoptionForm}
    </div>
    

  )
}

export default PetShowPage