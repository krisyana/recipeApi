const { verify } = require('../helpers/jwt');
const { User } = require('../models');

const authentication = async(req, res, next) => {
    const token = req.headers.access_token;

    try {
        if (token == null) {
            throw {
                name: 'AUTHERROR',
                status: 401,
                msg: 'Not Loged In',
            };
        }
        const payload = verify(token);
        const foundUser = User.findOne({
            where: {
                email: payload.email,
            },
        });
        if (!foundUser) {
            throw {
                name: 'NOTFOUND',
                status: 404,
                msg: `User with not found`,
            };
        }
        req.user = {
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role,
        };
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authentication;