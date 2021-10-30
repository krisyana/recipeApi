const router = require('express').Router();
const UserController = require('../controllers/userController')

router.route('/')
    .get(UserController.findAll)

router.route('/:id')
    .put(UserController.update)
    .delete(UserController.delete)

module.exports = router;