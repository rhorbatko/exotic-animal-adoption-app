import express from "express"
import clientRouter from "./clientRouter.js"
import petTypesRouter from "./api/v1/petTypesRouter.js"
import petsRouter from "./api/v1/petsRouter.js"
const rootRouter = new express.Router()

rootRouter.use("/api/v1/pet-types", petTypesRouter)
rootRouter.use("/api/v1/pets", petsRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
