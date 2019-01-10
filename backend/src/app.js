const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(require('cors')())
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))

const routes = require('./routes/routes')
app.use('/', routes)

// error handling
app.use((err, req, res, next) => {
  const message = `Something went wrong.`
  const { status = 500, error = message } = err
  res.status(status).json({
    status,
    error
  })
})

app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Not found'
    }
  })
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app