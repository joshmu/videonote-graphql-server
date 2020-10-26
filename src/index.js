import express from 'express'

const app = express()
const PORT = 4300

app.get('/', (req, res) => {
  res.json({
    message: 'hello there v1',
  })
})

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`)
})
