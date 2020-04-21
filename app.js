const express = require('express')
const server = express()
const PORT = 5000
const PUBLIC_DIR = __dirname + '/public/'

server.use(express.static(PUBLIC_DIR))

server.get('/', (req, res) => {
    res.sendFile(PUBLIC_DIR + 'index.html')
})

server.listen(PORT, () => {
    console.log(`Server runing in port ${PORT}`)
})
