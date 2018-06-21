const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://andrey:test123@ds125181.mlab.com:25181/graphql-anrey')
mongoose.connection.once('open', () => {
  console.log('connected to mongoDB')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(5000, () => {
  console.log('now listening for request on port 5000')
})
