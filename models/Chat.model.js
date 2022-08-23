const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const chatSchema = new Schema({
  user1: { type: Schema.Types.ObjectId, ref:"User"},
  user2: { type: Schema.Types.ObjectId, ref:"User"},
  messages :[{ type: Schema.Types.ObjectId, ref:"Message"}]
});

module.exports = model("Chat", chatSchema);