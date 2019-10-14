const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {
    res.send("Help Page")
})

app.listen(8080, () => {
    console.log("Server is up on 8080 port")
})