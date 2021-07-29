const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('<form action="/" method="POST">' +
      '<input type="number" name="firstNumber">' +
      '<input type="number" name="secondNumber">' +
      '<input type="submit" value="calculate">' +
    '</form>'
  )
})

app.post('/', (req, res) => {
  const firstNumber = Number(req.body.firstNumber)
  const secondNumber = Number(req.body.secondNumber)
  res.send('' + (firstNumber + secondNumber))
})

// eslint-disable-next-line no-undef
app.listen(proccess.env.PORT || 80)
