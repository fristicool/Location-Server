const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
let locations = []

app.get('/locations', (req, res) => {
  res.send(locations)
})

app.post('/addlocations', (req, res) => {
    console.log(req.body)

    for (let i = 0; i < locations.length; i++) {
        const element = locations[i];
        

        if (element.teamName === req.body.teamName) {
            locations[i] = element

            res.send('updated')
            return
        }
    }

    locations.push(req.body)

    res.send('updated')

    console.log(locations)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})