import express from "express"
import path from "path"
import logger from "morgan"
import bodyParser from "body-parser"
import hbsMiddleware from "express-handlebars"
import _ from "lodash"
import { fileURLToPath } from 'url'
import rootRouter from "./routes/rootRouter.js"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set("views", path.join(__dirname, "./views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../client/public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(rootRouter)

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

export default app
