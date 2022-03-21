import express from "express"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/", clientRouter)

export default rootRouter
