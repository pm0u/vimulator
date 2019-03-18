const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const unitsController = require('../controllers/unitsController')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const privateKey = process.env.JWT_PRIVATE_KEY
const publicKey = process.env.JWT_PUBLIC_KEY


const verify = function (req, res, next) {
    jwt.verify(req.cookies.token, privateKey,
        (err, decoded) => {
            if (err) {
                console.log('user not authorized')
                console.log(req.cookies.token)
                next({
                    status: 401,
                    error: err,
                    message: 'Unauthorized'
                })
            } else {
                req.userCredentials = decoded
                //console.log('user verified', decoded)
                next()
            }
        })
}

router
    .get('/user', verify, (req, res, next) => {
        usersController.getUserById(req.userCredentials.ghID).then((user, err) => {
            if (user.length > 0) {
                res.status(200).send(user[0])
            } else {
                next({
                    status: 404,
                    error: user,
                    message: 'User not found'
                })
            }
        })
    })
    .get('/users', verify, async (req, res, next) => {
        const { ghID } = req.userCredentials
        if (ghID === process.env.MONGODB_ADMIN_ID) {
            const users = await usersController.getAllUsers()
            if (users.length > 0) {
                res.status(200).send(users)
            } else {
                next({
                    status: 404,
                    error: users,
                    message: 'No users exist'
                })
            }
        } else {
            next({
                status: 401,
                message: 'Unauthorized'
            })
        }
    })
    .delete('/user/:ghID', verify, async (req, res, next) => {
        const { ghID } = req.userCredentials
        if (ghID === process.env.MONGODB_ADMIN_ID) {
            const user = await usersController.deleteUserByGHID(req.params.ghID)
            if (user.n > 0) {
                res.status(201).send(`user #${req.params.ghID} successfully deleted`)
            } else {
                next({
                    message: 'User does not exist',
                    error: user,
                    status: 404
                })
            }
        } else {
            next({
                status: 401,
                message: 'Unauthorized'
            })
        }
    })
    .put('/user', verify, async (req, res, next) => {
        const user = await usersController.updateUserByGHID(req.userCredentials.ghID, req.body)
        if (!user.error) {
            res.status(200).send(user)
        } else {
            next({
                status: 404,
                error: user.error,
                message: 'User not found'
            })
        }
    })

router
    .get('/units', unitsController.getAllUnits)
    .get('/units/:unitID', unitsController.getUnitByID)
    .post('/units', verify, async (req, res, next) => {
        const { ghID } = req.userCredentials
        if (ghID === process.env.MONGODB_ADMIN_ID) {
            try {
                const newUnit = await unitsController.createNewUnit(req.body)
                res.status(200).send(newUnit)
            }
            catch (error) {
                next({
                    message: 'New unit not created',
                    error,
                    status: 500
                })
            }
        } else {
            next({
                status: 401,
                message: 'Unauthorized'
            })
        }
    })
    .delete('/units/:unitID', verify, async (req, res, next) => {
        const { ghID } = req.userCredentials
        if (ghID === process.env.MONGODB_ADMIN_ID) {
            const deletedUnit = await unitsController.deleteUnitByID(req.params.unitID)
            if (deletedUnit.n > 0) {
                res.status(200).send(deletedUnit)
            } else {
                next({
                    status: 404,
                    message: 'Unit does not exist',
                    error: deletedUnit
                })
            }
        } else {
            next({
                status: 401,
                message: 'Unauthorized'
            })

        }
    })


module.exports = router