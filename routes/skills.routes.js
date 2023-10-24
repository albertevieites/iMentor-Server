const router = require('express').Router();

const { isAuthenticated } = require('../middlewares/jwt.middleware');
const Skills = require('../models/skills.model');

router.get('/skills', isAuthenticated, (req, res) => {
  Skills.find()
    .then(skills => res.json(skills))
    .catch(err => res.status(500).json(err));
});

router.get('/only5skills', isAuthenticated, (req, res) => {
  Skills.find()
    .limit(5)
    .then(skills => res.json(skills))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
