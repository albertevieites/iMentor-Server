const { Schema, model } = require('mongoose');
const skillsList = require("../utils/skills.list.js");

console.log(skillsList);

const skillsSchema = new Schema({
    name: {
        type: String,
        enum: skillsList,
    },
});

const Skills = model('skills', skillsSchema);

module.exports = Skills;
