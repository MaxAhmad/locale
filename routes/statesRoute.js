const  express = require('express')
const apicache = require('apicache')

const stateController = require('../controllers/localeController')

const stateRouter = express.Router()

// Init cache
let cache = apicache.middleware

stateRouter.post('/', stateController.createState)

stateRouter.get('/state', cache('2 minutes'), stateController.getAllState)

stateRouter.get('/lga', cache('2 minutes'), stateController.getAllLga)

stateRouter.get('/region', cache('2 minutes'), stateController.getAllRegions)


module.exports = stateRouter