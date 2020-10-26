import 'dotenv/config'

import cors from 'cors'
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

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'VideoNote server v1',
  })
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`)
})
