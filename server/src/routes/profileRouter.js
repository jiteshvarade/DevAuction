const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    // logic to get data of someones profile
})

router.post('/createdRooms', async (req, res) => {
    // logic to store created rooms id by user
})

router.post('/createdProjects', async (req, res) => {
    // logic to store created project id by user
})

router.post('/placedOffers', async (req, res) => {
    // logic to store Offers placed by user
})

router.post('/followers', async (req, res) => {
    // logic to store followers data
})

router.post('/spending', async (req, res) => {
    // logic to store spending data
})

router.post('/earning', async (req, res) => {
    // logic to store earning data
})

router.post('/credits', async (req, res) => {
    // logic to store credits of user
})



module.exports = router