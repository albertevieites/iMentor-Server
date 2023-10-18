const { Schema, model } = require('mongoose');

const arrSkills = require('../utils/skills.list.js');

const questionSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Name is mandatory'],
    },
    description: {
      type: String,
      required: [true, 'Description is mandatory'],
    },
    code: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    Comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comments',
      },
    ],
    tags: {
      type: [String],
      enum: arrSkills,
    },
    skills: [
      {
        type: Schema.Types.ObjectId,
        ref: 'skills',
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Question = model('Question', questionSchema);

module.exports = Question;
