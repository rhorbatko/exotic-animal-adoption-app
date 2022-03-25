import React, { useState } from "react"
import ErrorList from "./ErrorList"

const AdoptionApplicationForm = props => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errors, setErrors] = useState([])
  const [newApplication, setNewApplication] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "",
    petId: props.petId
  })

  const addNewApplication = async () => {
    try {
      const response = await fetch(`/api/v1/pets/${newApplication.petId}/adoption-applications`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newApplication)
      })
      if (!response.ok) {
        const body = await response.json()
        setErrors(body.errors)
      } else {
        const body = await response.json()
        console.log("Application Submitted: ", body)
        setFormSubmitted(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = event => {
    setNewApplication({
      ...newApplication,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addNewApplication()
  }

  if (!formSubmitted) {
    return (
      <>
        <ErrorList errors={errors} />
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} value={newApplication.name} />
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
            <input type="text" name="email" onChange={handleChange} value={newApplication.email} />
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
      </>
    )
  } else {
    return <h2>Your Request Is In Process</h2>
  }
}

export default AdoptionApplicationForm
