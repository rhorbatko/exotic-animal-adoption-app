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
          description: "Can fly sometimes can't."
        },
        {
          name: "Birds",
          imgUrl: "images/Types-Of-Birds-Pictures.jpg",
          description: "Can breathe underwater."
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
        //fish
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
          name: "Nemo",
          imgUrl: "images/nemo.jpg",
          age: 3,
          vaccinationStatus: true,
          adoptionStory: "Nemo was rescued from that Australian dentist.",
          availableForAdoption: false,
          petType: fish
        },
        {
          name: "Koy",
          imgUrl: "images/koi-fish.jpg",
          age: 187,
          vaccinationStatus: true,
          adoptionStory:
            "Koy was about to be sushi, but the previous owner had a change of heart and wanted caviar, so he gave koy to us.",
          availableForAdoption: true,
          petType: fish
        },
        {
          name: "Orca",
          imgUrl: "images/whale.jpg",
          age: 54,
          vaccinationStatus: false,
          adoptionStory:
            "Orca was just lonely so she just brought herself in (we know she's not an orca, she having an identiy crisis).",
          availableForAdoption: false,
          petType: fish
        },

        //bird
        {
          name: "Neo",
          imgUrl: "images/ask-bald-eagle-istock_000017215186large-2.jpg",
          age: 35,
          vaccinationStatus: false,
          adoptionStory: "Neo the chosen one was captured in South Florida",
          availableForAdoption: true,
          petType: bird
        },
        {
          name: "Delta",
          imgUrl: "images/bird-with-coat.jpg",
          age: 21,
          vaccinationStatus: false,
          adoptionStory:
            "Delta had a crazy night for her 21st and she flew off course. We found her at a Waffle House.",
          availableForAdoption: true,
          petType: bird
        },
        {
          name: "Spirit",
          imgUrl: "images/peguin.jpg",
          age: 14,
          vaccinationStatus: false,
          adoptionStory:
            "Spirit's previous owners surrendered him to us after learning he couldn't fly.",
          availableForAdoption: true,
          petType: bird
        },
        {
          name: "Sam",
          imgUrl: "images/tucan-sam.jpg",
          age: 74,
          vaccinationStatus: false,
          adoptionStory:
            "After Sam became too old to appear on the Fruit Loops ceral boxes, his family did a drive by drop off. Now he's ready for adoption",
          availableForAdoption: true,
          petType: bird
        },

        // reptiles
        {
          name: "Trinity",
          imgUrl: "images/images.jpg",
          age: 27,
          vaccinationStatus: false,
          adoptionStory: "Trinity was also captured in South Florida",
          availableForAdoption: true,
          petType: reptile
        },
        {
          name: "Salazar",
          imgUrl: "images/snake.jpg",
          age: 65,
          vaccinationStatus: true,
          adoptionStory: "Salazar can't be trusted but he can be adopted.",
          availableForAdoption: false,
          petType: reptile
        },
        {
          name: "Kermit",
          imgUrl: "images/frog.jpg",
          age: 4,
          vaccinationStatus: true,
          adoptionStory: "Kermit the frog here. Refuses to do the voice but can be adopted.",
          availableForAdoption: true,
          petType: reptile
        },
        {
          name: "Snap",
          imgUrl: "images/alligator.jpg",
          age: 1,
          vaccinationStatus: true,
          adoptionStory: "Snap is pocket sized... for now.",
          availableForAdoption: false,
          petType: reptile
        },

        //mammals
        {
          name: "Dumbo",
          imgUrl: "images/baby-elephant-first-bath-3.jpeg",
          age: 1,
          vaccinationStatus: true,
          adoptionStory: "Dumbo was saved from the circus.",
          availableForAdoption: true,
          petType: mammal
        },
        {
          name: "Bibi and Fiona",
          imgUrl: "images/hippo.jpg",
          age: 30,
          vaccinationStatus: false,
          adoptionStory: "Adopt Bibi, get Fiona free.",
          availableForAdoption: true,
          petType: mammal
        },
        {
          name: "Tony",
          imgUrl: "images/tiger.jpg",
          age: 89,
          vaccinationStatus: true,
          adoptionStory:
            "Thats right this is Tony the Tiger from Frosted Flakes. Just like Sam he got too old and is ready for adoption.",
          availableForAdoption: true,
          petType: mammal
        },
        {
          name: "Bear",
          imgUrl: "images/bear.jpg",
          age: 48,
          vaccinationStatus: false,
          adoptionStory:
            "Bear was kiced out of his home beacuse his family liked Goldilocks better.",
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
