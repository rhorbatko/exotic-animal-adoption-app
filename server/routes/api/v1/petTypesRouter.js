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


export default petTypesRouter