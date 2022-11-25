const router = require("express").Router();

router.use("/", require('./mentors.routes'))

router.use("/", require('./profile.routes'))

router.use("/", require('./questions.routes'))

router.use("/", require('./skills.routes'))

router.use("/chats", require('./chat.routes'))

router.use("/auth", require('./auth.routes'))

router.use("/upload", require('./upload.routes'))

router.get("/", (req, res, next) => {
  res.json("All good in here");
})

module.exports = router