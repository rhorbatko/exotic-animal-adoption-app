import express from "express"

const router = new express.Router()

const clientRoutes = ["/", "/pet-types", "/form"]
router.get(clientRoutes, (req, res) => {
  res.render("home")
})

export default router
