const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('asd')
})

app.listen(8080)
