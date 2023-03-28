

const express = require('express')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mountRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})