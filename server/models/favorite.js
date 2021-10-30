'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Favorite extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Favorite.belongsTo(models.User);
        }
    }
    Favorite.init({
        IngId: DataTypes.INTEGER,
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Title is required',
                },
                notEmpty: {
                    msg: 'Title is required',
                },
            },
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'ImageUrl is required',
                },
                notEmpty: {
                    msg: 'ImageUrl is required',
                },
            },
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'UserId is required',
                },
                notEmpty: {
                    msg: 'UserId is required',
                },
            },
        },
    }, {
        sequelize,
        modelName: 'Favorite',
    });
    return Favorite;
};