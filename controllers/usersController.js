const User = require('../models/User')

exports.createNewUser = (req, res) => {
    let newUser = new User(req.body)
    newUser.save((err, user) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(user)
        }
    })
}

exports.newUserAtLogin = ({ displayName, ghID, username }) => {
    let newUser = new User({ displayName, ghID, username })
    return newUser.save()
}

exports.getUserById = (ghID) => {
    return User.find({ ghID })
}

exports.getAllUsers = (req, res) => {
    return User.find({})
}

exports.deleteUserByGHID = (ghID) => {
    return User.deleteOne({ ghID })
}

exports.updateUserByGHID = async (ghID, newUser) => {
    const user = await User.findOne({ ghID })
    if (user.err) {
        return ({
            error: err
        })
    } else {
        for (let key in newUser) {
            user[key] = newUser[key]
        }
        return user.save()
    }
}