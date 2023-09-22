const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const arrSkills = require("../utils/skills.list.js");

const userSchema = new Schema({
  userType: {
    type: String,
    default: 'mentee',
    enum: ['mentor', 'mentee'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  aboutMe: {
    type: String,
    default: '',
  },
  profileImg: {
    type: String,
    default: 'http://cdn.onlinewebfonts.com/svg/img_574534.png',
  },
  ocuppation: {
    type: String,
  },
  company: {
    type: String,
  },
 /*  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: 'skills',
    },
  ], */
  skills: {
    type: [String],
    enum: arrSkills,
    default: arrSkills[0],
  },
  course: {
    type: String,
    enum: ['Web Development', 'UX/UI', 'Data Analytics'],
  },
  graduationYear: {
    type: Number,
  },
  Comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }],
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
});

const User = model('user', userSchema);

module.exports = User;
