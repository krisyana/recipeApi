const { getDb } = require('../config/mongodb');
var ObjectId = require('mongodb').ObjectId;

class User {
    static async findAll() {
        try {
            const db = getDb();
            const userCollection = db.collection('users');
            const users = await userCollection.find().toArray();
            return users;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    static async create(user) {
        try {
            const db = getDb();
            const userCollection = db.collection('users');
            const response = await userCollection.insertOne(user);
            const createdUser = await userCollection
                .find({ _id: ObjectId(response.insertedId) })
                .toArray();
            return createdUser;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    static async findOne(id) {
        try {
            const db = getDb();
            const userCollection = db.collection('users');
            const found = await userCollection.find({ _id: ObjectId(id) }).toArray();
            return found;
        } catch (error) {
            console.log(error);
        }
    }
    static async update(id, users) {
        try {
            const db = getDb();
            const userCollection = db.collection('users');
            const updated = await userCollection.updateOne({ _id: ObjectId(id) }, {
                $set: users,
            });
            const user = await userCollection.find({ _id: ObjectId(id) }).toArray();

            return user;
        } catch (error) {
            console.log(error);
        }
    }
    static async delete(id) {
        try {
            const db = getDb();
            const userCollection = db.collection('users');
            const deleted = await userCollection.deleteOne({ _id: ObjectId(id) });
            return deleted;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = User;