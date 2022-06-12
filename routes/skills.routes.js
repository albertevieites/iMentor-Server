const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const { OwnerOnly } = require("../middlewares/ownerOnly.middleware")
const Users = require('../models/User.model')
const Skills = require('../models/skills.model')
const Comments = require('../models/comment.model')

router.get("/skills",  isAuthenticated, (req, res) => {

 Skills
    .find()
    .then(skills => res.json(skills))
    .catch(err => res.status(500).json(err))
})

router.get("/only5skills",  isAuthenticated, (req, res) => {

    Skills
       .find().limit(5)
       .then(skills => res.json(skills))
       .catch(err => res.status(500).json(err))
   })


module.exports = router