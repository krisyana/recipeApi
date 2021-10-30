const router = require('express').Router();
const FavoriteController = require('../controllers/favoriteController');
const authentication = require('../middlewares/authentication');

router.use(authentication);
router
    .route('/')
    .get(FavoriteController.findAll)
    .post(FavoriteController.create);

module.exports = router;