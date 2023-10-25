const { Schema, model } = require('mongoose');

const arrTags= require('../utils/tags.list.js');

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
      enum: arrTags,
    },
  },
  {
    timestamps: true,
  },
);

const Question = model('Question', questionSchema);

module.exports = Question;
