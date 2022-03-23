import pg from "pg"
const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/animal_shelter_development"
})

class Seeder {
  static async seed() {
    try {
      const petTypes = [
        {
          name: "Mammals",
          imgUrl: "images/List-of-Mammals-1.jpeg",
          description: "Warm-blooded creatures."
        },
        {
          name: "Reptiles",
          imgUrl: "images/Types-of-Reptiles.jpg",
          description: "Cold-blooded and slimey."
        },
        {
          name: "Fish",
          imgUrl: "images/Types-of-Fish-800x500.jpeg",
          description: "Can breathe underwater."
        },
        {
          name: "Birds",
          imgUrl: "images/Types-Of-Birds-Pictures.jpg",
          description: "Can fly sometimes can't."
        }
      ]

      for (let i = 0; i < petTypes.length; i++) {
        const petType = petTypes[i]
        const queryString =
          "INSERT INTO pet_types (name, img_url, description) VALUES ($1, $2, $3);"
        await pool.query(queryString, [petType.name, petType.imgUrl, petType.description])
      }

      const mammalsData = await pool.query("SELECT * FROM pet_types WHERE name = 'Mammals';")
      const mammal = mammalsData.rows[0]
      const reptilesData = await pool.query("SELECT * FROM pet_types WHERE name = 'Reptiles';")
      const reptile = reptilesData.rows[0]
      const fishData = await pool.query("SELECT * FROM pet_types WHERE name = 'Fish';")
      const fish = fishData.rows[0]
      const birdsData = await pool.query("SELECT * FROM pet_types WHERE name = 'Birds';")
      const bird = birdsData.rows[0]

      const pets = [
        {
          name: "Morpheus",
          imgUrl: "images/morpheus.png",
          age: 187,
          vaccinationStatus: false,
          adoptionStory: "Morpheus was found in the Indian Ocean",
          availableForAdoption: true,
          petType: fish
        },
        {
          name: "Neo",
          imgUrl: "images/ask-bald-eagle-istock_000017215186large-2.jpg",
          age: 35,
          vaccinationStatus: false,
          adoptionStory: "The chosen one was captured in South Florida",
          availableForAdoption: true,
          petType: bird
        },
        {
          name: "Trinity",
          imgUrl: "images/images.jpg",
          age: 27,
          vaccinationStatus: true,
          adoptionStory: "Trinity was also captured in South Florida",
          availableForAdoption: true,
          petType: reptile
        },
        {
          name: "Dumbo",
          imgUrl: "images/baby-elephant-first-bath-3.jpeg",
          age: 1,
          vaccinationStatus: true,
          adoptionStory: "Dumbo was saved from the circus",
          availableForAdoption: true,
          petType: mammal
        }
      ]

      for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]
        const queryString = `INSERT INTO pets (name, img_url, age, vaccination_status, adoption_story, available_for_adoption, pet_type_id) VALUES ($1, $2,$3, $4, $5, $6, $7);`
        await pool.query(queryString, [
          pet.name,
          pet.imgUrl,
          pet.age,
          pet.vaccinationStatus,
          pet.adoptionStory,
          pet.availableForAdoption,
          pet.petType.id
        ])
      }
      console.log("Seeding complete")
      pool.end()
    } catch (error) {
      console.log(error)
      pool.end()
    }
  }
}

export default Seeder
