import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/animal_shelter_development"
})

class PetType {
  constructor({ id, name, img_url, image, description }) {
    this.id = id
    this.name = name
    this.image = img_url || image
    this.description = description || null
  }

  static async findAll() {
    try {
      const result = await pool.query("SELECT * FROM pet_types;")
      const petTypesData = result.rows
      const petTypes = petTypesData.map(petType => new PetType(petType))
      return petTypes
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async findById(id) {
    try {
      const query = "SELECT * FROM pet_types WHERE ID= $1;"
      const result = await pool.query(query, [id])
      const petTypeData = result.rows[0]
      const petType = new PetType(petTypeData)

      return petType
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  async findPets() {
    const petFile = await import("./Pet.js")
    const Pet = petFile.default
    try {
      const query = `SELECT * FROM pets WHERE pet_type_id = $1;`
      const result = await pool.query(query, [this.id])

      const relatedPetsData = result.rows
      const relatedPets = relatedPetsData.map(pet => new Pet(pet))

      return relatedPets
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default PetType
