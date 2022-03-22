import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
    connectionString: "postgres://postgres:password@localhost:5432/animal_shelter_development"
})

class PetType {
    constructor({id, name, img_url, image, description}) {
        this.id = id
        this.name = name
        this.image = img_url || image
        this.description = description || null
    }

    static async findAll() {
        try {
            const result = await pool.query("SELECT * FROM pet_types;")
            const petTypesData = result.rows
            const petTypes = petTypesData.map((petType) => new PetType(petType))
            return petTypes
        } catch (error) {
            console.error(error);
            throw(error)
        }
    }
}

export default PetType