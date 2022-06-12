const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/jwt.middleware")
const { OwnerOnly } = require("../middlewares/ownerOnly.middleware")
const Users = require('../models/User.model')
const Questions = require('../models/question.model')
const Comments = require('../models/comment.model')


router.get("/questions", (req, res) => {

 Questions
    .find().populate('owner')
    .then(questions => res.json(questions))
    .catch(err => res.status(500).json(err))
})

//add question
router.post("/questions", isAuthenticated, (req, res) => {
    const { imageUrl, title, description, skills } = req.body
    const userId = req.payload._id

    Questions
       .create({ imageUrl, owner: userId, title, description, skills  })
       .then(question=>{
        Users.findByIdAndUpdate(userId,{$push:{questions:question._id}})
        .then(()=>res.json(question))
    })
       .catch(err => res.status(500).json(err))
       
   })

router.get("/questions/:id",  isAuthenticated, (req, res) => {
    
    const {id} = req.params

    Questions
       .findById(id).populate('owner')
       .populate("Comments")
        .populate({path:"Comments", populate:{path:"user"}})
       .then(question => res.json(question))
       .catch(err => res.status(500).json(err))
   })

router.post("/questions/:id/delete", isAuthenticated,  (req, res) => {
    
    const {id} = req.params
    const userId = req.payload._id
    
    Questions
       .findByIdAndDelete(id)
        .then(()=>Users.findByIdAndUpdate(userId, {$pull: {questions: id}}))
       .catch(err => res.status(500).json(err))
   })

   router.post("/questions/:id/edit", isAuthenticated,  (req, res) => {
    
    const {id} = req.params
    const { imageUrl, title, description, skills } = req.body
    
    Questions
       .findByIdAndUpdate(id, { imageUrl, title, description, skills  })
       .catch(err => res.status(500).json(err))
        
   })

router.post("/questions/:id/comment/add", isAuthenticated, (req, res) => {
    const comment = req.body.comment
    const questionId = req.params.id
    const userId = req.payload._id

    Comments
    .create({ user: userId,text: comment})
    .then((newComment)=>
    Questions
    .findByIdAndUpdate(questionId, {$push: { Comments: newComment._id}},{new: true})
    .then((updatedQuestion)=> 
        Users
        .findByIdAndUpdate(userId, {$push: { Comments: newComment._id}})
            .then(()=>
            Questions
                .findOne(updatedQuestion)
                .populate("Comments")
                .populate({path:"Comments", populate:{path:"user"}})
                )
            .then((populatedQuestion)=>res.json(populatedQuestion))
    ))
    .catch((err)=>console.log(err))

   
   })

module.exports = router