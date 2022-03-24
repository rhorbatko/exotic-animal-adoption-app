import express from "express"
import cleanUserInput from "../../../helpers/cleanUserInput.js"

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

export default petsRouter
