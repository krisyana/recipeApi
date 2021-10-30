const router = require('express').Router();
const userRoute = require('./userRoutes');
const favoriteRoute = require('./favoriteRoute');
const UserController = require('../controllers/userController');
const errorHandler = require('../middlewares/handleError');

router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Success Connect to db' });
});
router.post('/register', UserController.signup);
router.post('/login', UserController.login);
// router.post('/googleRegister', UserController.googleAuth);
router.use('/favorites', favoriteRoute);
router.use('/users', userRoute);
router.use(errorHandler);

module.exports = router;