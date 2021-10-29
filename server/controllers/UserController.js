const User = require('../model/User');

class UserController {
    static async findAll(req, res) {
        try {
            const users = await User.findAll();
            res.json({ users });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async create(req, res) {
        try {
            const { username, email, password, role, phoneNumber, address } =
            req.body;
            const created = await User.create({
                username,
                email,
                password,
                role,
                phoneNumber,
                address,
            });
            res.status(201).json({ created });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async findOne(req, res) {
        try {
            const { id } = req.params;
            const find = await User.findOne(id);
            res.status(200).json({ find });
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const find = await User.delete(id);
            res.status(200).json({ find });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { username, email, password, role, phoneNumber, address } =
            req.body;
            const updated = await User.update(id, {
                username,
                email,
                password,
                role,
                phoneNumber,
                address,
            });
            res.status(201).json({ updated });
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

module.exports = UserController;