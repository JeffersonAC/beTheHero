const express = require('express')
const Ongcontroller = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', Ongcontroller.index)
routes.post('/ongs', Ongcontroller.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)

routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)
module.exports = routes