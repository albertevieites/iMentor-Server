const router = require('express').Router();

const { isAuthenticated } = require('../middlewares/jwt.middleware');
const Users = require('../models/user.model');

router.get('/profile/:id', isAuthenticated, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .populate('questions')
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

router.patch('/profile/:id/edit', isAuthenticated, (req, res) => {
  const {
    username,
    userType,
    aboutMe,
    profileImg,
    course,
    graduationYear,
    occupation,
    company,
  } = req.body;

  const { id } = req.params;

  Users.findByIdAndUpdate(id, {
    userType,
    aboutMe,
    profileImg,
    course,
    graduationYear,
    occupation,
    company,
    username,
  })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
