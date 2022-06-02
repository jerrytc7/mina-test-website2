const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes)
app.use(cors())

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

app.listen(3001, () => console.log("server is up and running"))