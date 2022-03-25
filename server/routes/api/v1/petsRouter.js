import express from "express"
//import cleanUserInput from "../../../helpers/cleanUserInput.js"
import AdoptionApplication from "../../../models/AdoptionApplication.js"

import Pet from "../../../models/Pet.js"

const petsRouter = new express.Router()

petsRouter.get("/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id)
    res.status(200).json({ pet })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: error })
  }
})
petsRouter.post("/:id/adoption-applications", async (req, res) => {
  //const userInput = cleanUserInput(req.body)

  try {
    const application = new AdoptionApplication(req.body)
    await application.save()
    res.status(201).json({ application })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: error })
  }
})
export default petsRouter
