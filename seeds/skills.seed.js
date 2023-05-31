require("dotenv/config")
require('../db/index')

const mongoose = require('mongoose');

const Skills = require("../models/skills.model");

Skills.deleteMany()
.then(()=>
Skills.create([
  {name: 'React'}, 
  {name:'NodeJS'}, 
  {name: 'Express'}, 
  {name: 'MongoDB'},
  {name: 'Canvas'},
  {name: 'Cloudinary'},
  {name: 'Moongoose'},
  {name: 'JavaScript'},
  {name: 'Python'},
  {name: 'Front-end'},
  {name: 'Back-End'},
  {name: 'Wireframe'},
  {name: 'Prototype'},
  {name: 'Mockup'},
  {name: 'Userflow'}, 
  {name: 'Figma'}, 
  {name: 'Sketch'}, 
  {name: 'Photoshop'}, 
  {name: 'Information Arcitechture'}, 
  {name: 'HTML'},
  {name: 'CSS'}, 
  {name: 'GitHub'}, 
  {name: 'Visual Code'}, 
  {name: 'SQL'}, 
  {name: 'Microsoft Excel'}, 
  {name: 'R'}, 
  {name: 'Data Visualization'}, 
  {name: 'Presentation Skills'}, 
  {name: 'Machine Learning'}, 
  {name: 'Data Cleaning'}, 
  {name: 'Linear Algebra'},
  {name: 'Calculus'},
  {name: 'Communication skills'}]
  ))
  .then(()=>{
    console.log(`${Skills.length} skills successfully created`)
//   mongoose.connection.close()
})
  .catch((err)=>console.log("couldn't add the skills", err))