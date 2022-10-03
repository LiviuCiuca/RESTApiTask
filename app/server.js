const express = require('express')
const app = express()
const port = 8000

app.use(express.json());
attendies = []

app.get('/', (req, res) => {
  res.send('<html><body>Your HTML text</body></html>')
})

app.post('/attendee', (req,res)=>{
  attendies.push(req.body)
  res.status(201).json(req.body)
  res.json(req.body)
})

app.get('/attendees', (req, res) => {
  res.json(attendies)
})

app.delete('/attendee/:id', (req, res) => {
  attendies = attendies.filter(o => o.id !== parseFloat(req.params.id))
  res.status(204).json()
  
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})
