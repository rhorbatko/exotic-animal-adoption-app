import pg from "pg"
import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/animal_shelter_development"
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const petTypesPath = path.join(__dirname, "../../petTypes.txt")

class Seeder {
  static async seed() {
    LineReader.eachLine(petTypesPath, async (line, last, done) => {
      const [name, img_url, description] = line.split(";")
      // build our SQL query string
      const queryString = "INSERT INTO pet_types (name, img_url, description) VALUES ($1, $2, $3);"

      //execute our query
      try {
        const result = await pool.query(queryString, [name, img_url, description])
        if (last) {
          //drain the pool because we're done connecting
          console.log("Seeding Complete")
          pool.end()
        }
        done()
      } catch (error) {
        console.log(`Error: ${error}`)
        done()
      }
    })
  }
}

export default Seeder
