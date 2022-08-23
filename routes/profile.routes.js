const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const { OwnerOnly } = require("../middlewares/ownerOnly.middleware")
const Users = require('../models/User.model')


router.get("/profile/:id",  isAuthenticated, (req, res) => {

  const { id } = req.params

  Users
    .findById(id).populate("skills").populate("questions")
    .then(user => res.json(user))
    .catch(err => console.log(err))
})


router.post("/profile/:id/edit",  isAuthenticated, (req, res) => {

  const { username, userType, aboutMe, profileImg, course, graduationYear,skills,ocuppation,company } = req.body
  const {id} = req.params

  Users
    .findByIdAndUpdate(id, { userType, aboutMe, profileImg, course, graduationYear,skills,ocuppation,company, username })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(500).json(err))
})




module.exports = router