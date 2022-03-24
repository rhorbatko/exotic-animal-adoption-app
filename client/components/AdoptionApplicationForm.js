import React, {useState} from 'react'

const AdoptionApplicationForm = (props) => {
  const [newApplication, setNewApplication] = useState({
    name:"",
    phoneNumber:"",
    email:"",
    homeStatus:"",
  })
  const addNewApplication = async () =>{
    
  }
  const handleChange = event =>{
    setNewApplication({
      ...newApplication,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event =>{
   
  }
  return (
    <form>
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