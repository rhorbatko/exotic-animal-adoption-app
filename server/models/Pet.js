import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/animal_shelter_development"
})

class Pet {
  constructor({
    id,
    name,
    img_url,
    image,
    age,
    vaccination_status,
    vaccinationStatus,
    adoption_story,
    adoptionStory,
    available_for_adoption,
    availableForAdoption,
    pet_type_id,
    petTypeId
  }) {
    this.id = id
    this.name = name
    this.image = image || img_url
    this.age = age || null
    this.vaccinationStatus = vaccinationStatus || vaccination_status
    this.adoptionStory = adoptionStory || adoption_story
    this.availableForAdoption = availableForAdoption || available_for_adoption
    this.petTypeId = petTypeId || pet_type_id
  }

  static async findAll() {
    try {
      const result = await pool.query("SELECT * FROM pets;")
      const petsData = result.rows
      const pets = petsData.map(pet => new Pet(pet))
      return pets
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async findById(id) {
    try {
      const query = "SELECT * FROM pets WHERE ID= $1;"
      const result = await pool.query(query, [id])
      const petData = result.rows[0]
      const pet = new Pet(petData)
      return pet
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default Pet
