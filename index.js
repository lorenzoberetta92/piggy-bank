const express = require('express')
const parser = require('body-parser')
const expenses = []

const app = express()
  .use(parser.json())
  .use(express.static('web'))

app.post('/expenses', (req, res) => {
  const expense = req.body
  expense.id = expenses.length
  expenses.push(expense)
  res.setHeader('Location', `/expenses/${expense.id}`) // fixme: this route is not yet implemented
  res.json(expense)
})

app.get('/expenses', (req, res) => {
  res.json(expenses)
})

app.get('/*', (req, res) => {
  res.status(404).end('The requested route does not exist!')
})

// catch-all route for serving all 404s (url not found) type of requests

app.listen(3000, function () {
  console.log('* server started on http://localhost:3000')
})
