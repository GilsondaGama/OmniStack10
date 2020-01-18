const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')


const app = express()

mongoose.connect('mongodb+srv://Omni10:Omni10@cluster0-b3b2t.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  useCreateIndex: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)

