const router = require("express").Router()

const { uploadCloud } = require('./../config/cloudinary.config')

router.post('/image', uploadCloud.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: "Couldn't load the file" })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})



module.exports = router