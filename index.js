const express = require('express')
var bodyParser = require('body-parser')
const fetch = require("node-fetch");
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const wolfgangTag = '%23GYVQLUUP'
const queenTag = '%23PL2QL8QP'

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJkZDFkNTg2LTYzNGUtNGQyYi1hNDIwLTZjNDFhMmQzZDFjNyIsImlhdCI6MTU2MTU2NTA4Nywic3ViIjoiZGV2ZWxvcGVyLzY0NjMyMzg3LWQxNTMtZDdlYS1jYzYyLTFjN2EzNjk0YjRjZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgwLjUyLjEwOS44NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.5jJW8XzrMrXtV7sYxoYAzNTXy52fdY_DDjuAd1U_NBFz6nZaCx4lh8GszGsC35y6DIGFggoA8seMaSr62R8LKw'

app.get('/wolfgang', (req, res) =>{
  // We make a petition to the COC API you can ignore the response and then functions
  // it's just code you will have to put no need to understand it for now
  fetch('https://api.clashofclans.com/v1/clans/' + wolfgangTag, {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + apiKey,
    }
  }).then((response) => response.json())
    .then((json) => {
      //here you get the json in the json variable and you can do whatever you want with it
      // we will get the members and for each member get only some params
      const members = json.memberList;
      const membersFormatted = members.map((member) => ({
        name: member.name,
        role: member.role,
        league: member.league.name,
        trophies: member.trophies,
        donations: member.donations,
        donationsReceived: member.donationsReceived
      }))
      res.send(membersFormatted);
    
    })
})

app.post('/', (req,res) => {
  res.send(req.body.username)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))