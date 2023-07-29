const express = require('express')
const controller = require('../controllers/article')
const router = express.Router()

router.get('/', controller.article)

module.exports = router
