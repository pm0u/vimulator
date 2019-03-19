'use strict'
const express = require('express')
const passport = require('passport')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const privateKey = process.env.JWT_PRIVATE_KEY
const publicKey = process.env.JWT_PUBLIC_KEY

const usersController = require('../controllers/usersController')

const appUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:3000'

router
    .get('/github', passport.authenticate('github'))
    .get('/github/callback', passport.authenticate('github'), async (req, res) => {
        const { id: ghID, displayName, username } = req.user.profile

        let user = await usersController.getUserById(ghID)[0]

        if (!user) {
            user = await usersController.newUserAtLogin({ displayName, ghID, username })
        }
        const token = jwt.sign(JSON.stringify(user), privateKey)
        res.cookie('token', token)
        res.redirect(appUrl)
    })

module.exports = router