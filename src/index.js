const path = require('path')
const express = require('express')

const app = express()
const publicFilePath = path.join(__dirname, '../public')

const port = process.env.PORT || 3000

app.use(express.static(publicFilePath))

app.get('/', (req,res) => {
    res.send('')
})



app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})