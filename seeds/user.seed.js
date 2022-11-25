require("dotenv/config")
require('../db/index')

const mongoose = require('mongoose');

const User = require("../models/User.model");

User.deleteMany()
.then(()=>
User.create([
  {
    type: "mentor",
    username: "Aleix Abuli",
    email: "baleix@ironhack.com",
    password: "12345678",
    aboutMe: "I've been a graphic designer/community manager for the last two years but right now I hope to become a great developer.",
    profileImg: "https://ca.slack-edge.com/T02CQ4EN4-U02KX5RSJKD-dfc890210a1c-512",
    course: "Web Development",
    graduationYear: 2022,
    skills: ['6299c8c9874d54a52ba976fc', '6299c8c9874d54a52ba976fb', '6299c8c9874d54a52ba976fe'],
    ocuppation: "Teacher Assistant",
    company: "Ironhack",
      },
  {
    type: "mentor",
    username: "Marco Santonastasi",
    email: "marco@ironhack.com",
    password: "12345678",
    aboutMe: "I run my own engineering firm and I am an instructor in software engineering.",
    profileImg: "https://avatars.githubusercontent.com/u/44085372?v=4",
    course: "Web Development",
    graduationYear: 2020,
    skills: ['6299c8c9874d54a52ba976ff', '6299c8c9874d54a52ba976fd', '6299c8c9874d54a52ba97701', '6299c8c9874d54a52ba97702'],
    ocuppation: "Software Engineering Instructor",
    company: "Ironhack",
  },
  {
    type: "mentee",
    username: "Pablo Dellacassa",
    email: "pablodellacassa@ironhack.com",
    password: "12345678",
    aboutMe: "In this profile you can check a little bit of the personal projects and this is are the main languages used",
    profileImg: "https://ca.slack-edge.com/T02CQ4EN4-U036UER4GG2-d4e588552193-512",
    course: "Web Development",
    graduationYear: 2022,
    skills: ['6299c8c9874d54a52ba97703', '6299c8c9874d54a52ba97700', '6299c8c9874d54a52ba976fd', '6299c8c9874d54a52ba976ff'],
  },
  {
    type: "mentee",
    username: "Samy Ali",
    email: "samy@ironhack.com",
    password: "12345678",
    aboutMe: "Learning by doing",
    profileImg: "https://avatars.githubusercontent.com/u/102321253?v=4",
    course: "Web Development",
    graduationYear: 2022,
    skills: ['6299c8c9874d54a52ba97700', '6299c8c9874d54a52ba976fd', '6299c8c9874d54a52ba976ff'],
  },
  {
    type: "mentor",
    username: "Klaus",
    email: "klausy@ironhack.com",
    password: "12345678",
    aboutMe: "I've been working as a senior developer for the past 10 years",
    profileImg: "https://www.redeszone.net/app/uploads-redeszone.net/2022/03/hacker-sombrero-gris.jpg",
    course: "Web Development",
    graduationYear: 2020,
    skills: ['6299c8c9874d54a52ba976ff', '6299c8c9874d54a52ba976fd', '6299c8c9874d54a52ba97701', '6299c8c9874d54a52ba97702'],
    ocuppation: "Senior Developer",
    company: "Fancy Company",
      },

      {
        type: "mentor",
        username: "Queen Elizabeth II",
        email: "queen@ironhack.com",
        password: "12345678",
        aboutMe: "I've been working as a UX designer in my free time for the past 70 years",
        profileImg: "https://www.rct.uk/sites/default/files/styles/rctr-scale-1010w/public/Teaser%20-%20Rainbow%20Queen.jpg?itok=jcco0h3U",
        course: "Web Development",
        graduationYear: 2020,
        skills: ['6299c8c9874d54a52ba97707', '6299c8c9874d54a52ba97708', '6299c8c9874d54a52ba97704', '6299c8c9874d54a52ba9770a'],
        ocuppation: "Senior Developer",
        company: "Fancy Company",
          },
]))

.then(()=>{
  console.log(`${User.length} users successfully created`)
//   mongoose.connection.close()
})
.catch((err)=>console.log("couldn't add the users", err))
