const { Favorite } = require('../models');

class FavoriteController {
    static async findAll(req, res, next) {
        try {
            console.log(req.user);
            const { id } = req.user;
            const result = await Favorite.findAll({ where: { UserId: id } });
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    static async create(req, res, next) {
        try {
            const { id: UserId } = req.user;
            const { title, image, id: IngId } = req.body;
            const result = await Favorite.create({ title, image, IngId, UserId });
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = FavoriteController;