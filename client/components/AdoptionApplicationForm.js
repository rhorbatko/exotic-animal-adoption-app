import React, {useState} from 'react'

const AdoptionApplicationForm = (props) => {
  const [errors, setErrors] = useState([])
  const [newApplication, setNewApplication] = useState({
    name:"",
    phoneNumber:"",
    email:"",
    homeStatus:"",
    petId: props.petId
  })

  const addNewApplication = async (banana) =>{
    debugger
    try{
      const response = await fetch(`/api/v1/pets/${newApplication.petId}/adoption-applications`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(banana)
      })
      debugger
      if (!response.ok){
        debugger
        const errorMessage = `${response.status}`
        return setErrors(body.errors)
      }else{
        const body = await response.json()
        console.log(body)
      }
    }catch(error){

    }
  }


  const handleChange = event =>{
    setNewApplication({
      ...newApplication,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event =>{
   addNewApplication(newApplication)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={newApplication.name}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          value={newApplication.phoneNumber}
        />
      </label>
      <label>
        email:
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={newApplication.email}
        />
      </label>
      <label>
        Home Status:
        <select name="homeStatus" value={newApplication.homeStatus} onChange={handleChange}>
          <option>Select one</option>
          <option>Own</option>
          <option>Rent</option>
        </select>
      </label>

      <input type="submit" value="Submit Application" />
    </form>
  )
}

export default AdoptionApplicationForm