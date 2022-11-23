const express = require('express')
const controller = express.Router()
let users = require("../data/simulated_database")



// POST - CREATE - SKAPA ANVÄNDARE
// http://localhost:5000/api/users
controller.post('/', (httpRequest, httpResponse) => {
    

    let user = {
        id: (users[users.length -1])?.id > 0 ? (users[users.length -1])?.id + 1 : 1, 
        firstName: httpRequest.body.firstName,
        lastName: httpRequest.body.lastName,
        email: httpRequest.body.email,
        password: httpRequest.body.password
    }

    users.push(user)
    httpResponse.status(201).json(users)
})

// GET - READ - HÄMTA ALLA ANVÄNDARE
// http://localhost:5000/api/users
controller.get('/', (httpRequest, httpResponse) => {
    httpResponse.status(200).json(users)
})



module.exports = controller 