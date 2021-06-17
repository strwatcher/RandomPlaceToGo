const Router = require('express')
const router = new Router()
const controller = require('./generatorController')


router.post('/add', controller.addPlace);
router.get('/place', controller.getPlace);
router.post('/rate', controller.rate);


module.exports = router
