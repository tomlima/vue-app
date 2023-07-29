const express = require('express')
const cors = require('cors')
const articleRouter = require('./router/article')
const port = 3001

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

app.use('/api/article', articleRouter)

app.listen(port, () => {
  console.log(`Server up at port ${port}`)
})
