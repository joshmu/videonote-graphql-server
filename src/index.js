import 'dotenv/config'

import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import mongoose from 'mongoose'

import schema from './schema'

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()
const PORT = 4300

app.get('/', (req, res) => {
  res.json({
    message: 'hello there v1',
  })
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`)
})
