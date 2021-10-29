const UserController = require('../controllers/UserController');
const router = require('express').Router();

router.get('/', UserController.findAll);
router.post('/', UserController.create);
router.get('/:id', UserController.findOne);
router.delete('/:id', UserController.delete);
router.put('/:id', UserController.update);

module.exports = router;