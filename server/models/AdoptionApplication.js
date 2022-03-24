import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/animal_shelter_development"
})

class AdoptionApplication {
  constructor({ id, name, phoneNumber, email, homeStatus, applicationStatus, petId }) {
    this.id = id
    this.name = name
    this.phoneNumber = phoneNumber
    this.email = email
    this.homeStatus = homeStatus
    this.applicationStatus = applicationStatus
    this.petId = petId
  }

  async save() {
    debugger
    try{
      if(!this.name.trim()){
        throw "Please fill out the name field"
      }if(!this.phoneNumber.trim()){
        throw "Please fill out the phone number"
      }if(!this.email.trim()){
        throw "Please fill out the email"
      }if(!this.homeStatus){
        throw "Please fill out the home status field"
      }else{
        const query =
        "INSERT INTO adoption_applications(name, phone_number, email, home_status, application_status, pet_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;"
      const result = await pool.query(query, [
        this.name,
        this.phoneNumber,
        this.email,
        this.homeStatus,
        this.applicationStatus,
        this.petId
      ])

      const newApplicationId = result.rows[0].id
      this.id = newApplicationId

      return true
      }
      
    }catch(error){
      console.error(error)
      throw error
    }
    
  }

  async findPet() {
    const petFile = await import("./Pet")
    const Pet = petFile.default
  }
}
export default AdoptionApplication
