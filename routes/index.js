const router = require('koa-router')()
const indexControllers = require('../controllers')



router.get('/',indexControllers .index );


module.exports = router
