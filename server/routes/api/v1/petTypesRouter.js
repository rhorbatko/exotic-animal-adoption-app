import express from "express"

import PetType from "../../../models/PetType.js"

const petTypesRouter = new express.Router()

petTypesRouter.get("/", async (req, res) => {
  try {
    const petTypes = await PetType.findAll()
    res.status(200).json({ petTypes })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: error })
  }
})

petTypesRouter.get("/:id", async (req, res) => {
  try {
    const petType = await PetType.findById(req.params.id)

    petType.pets = await petType.findPets()

    res.status(200).json({ petType })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: error })
  }
})

export default petTypesRouter
