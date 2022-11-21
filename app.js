const express = require('express')
const app = express()

// routes
app.get('/', (req, res) => {
  res.send('Task Menager App')
  // console.log('Task menager App')
})

const port = 3000

app.listen(port, console.log(`server is listening at port ${port}..`))
