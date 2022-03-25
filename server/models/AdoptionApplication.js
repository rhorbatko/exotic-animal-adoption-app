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
    const errArray = []
    if (!this.name.trim()) {
      errArray.push("Please fill out the name field")
    }
    if (!this.phoneNumber.trim()) {
      errArray.push("Please fill out the phone number")
    }
    if (!this.email.trim()) {
      errArray.push("Please fill out the email")
    }
    if (!this.homeStatus) {
      errArray.push("Please fill out the home status field")
    }
    try {
      if (errArray.length === 0) {
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
      } else {
        throw errArray
      }
    } catch (error) {
      throw error
    }
  }

  async findPet() {
    const petFile = await import("./Pet")
    const Pet = petFile.default
  }
}
export default AdoptionApplication
