import express from "express"

const router = new express.Router()

const clientRoutes = ["/"]
router.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default router
