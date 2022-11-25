require("dotenv/config")
require('../db/index')

const mongoose = require('mongoose');

const Questions = require("../models/question.model");

Questions.deleteMany()
.then(()=>
Questions.create([
  {
        title: "How to determine if a number is odd in JS",
        description: "function isOdd(num) => return num % 2 console.log('1 is ' + isOdd(1)) console.log('2 is ' + isOdd(2)) console.log('3 is ' + isOdd(3)) console.log('4 is ' + isOdd(4))",
        owner: "62a1b25b80cbd398b403a5a0",
        skills: ['6299c8c9874d54a52ba976fc', '6299c8c9874d54a52ba976fb', '6299c8c9874d54a52ba976fe']
        
  },

  {
    title: "How do I loop through or enumerate a JavaScript object?",
    description: "var p = {'p1': 'value1','p2': 'value2','p3': 'value3'};How do I loop through all of p's elements (p1, p2, p3...) and get their keys and values?",
    owner: "62a1b25b80cbd398b403a5a3",
    skills: ['6299c8c9874d54a52ba976ff', '6299c8c9874d54a52ba976fd', '6299c8c9874d54a52ba97701', '6299c8c9874d54a52ba97702']
  },

  {
    title: "Accesing the index in 'for' loops",
    description: "xs = [8, 23, 45] for x in xs:print('item #{} = {}'.format(index, x)) Desired output: item #1 = 8 item #2 = 23 item #3 = 45",
    owner: "62a1b25b80cbd398b403a5a2",
    skills: ['6299c8c9874d54a52ba97703', '6299c8c9874d54a52ba97700', '6299c8c9874d54a52ba976fd', '6299c8c9874d54a52ba976ff']
  },

  {
    title: "How to use the 'for' loop in JavaScript?",
    description: "var linkElement = document.getElementById('BackButton'); var loc_array = document.location.href.split('/'); var newT = document.createTextNode(unescape(capWords(loc_array[loc_array.length-2]))); linkElement.appendChild(newT); Currently it takes the second to last item in the array from the URL. However, I want to do a check for the last item in the array to be 'index.html' and if so, grab the third to last item instead.",
    owner: "62a1b25b80cbd398b403a5a1",
    skills: ['6299c8c9874d54a52ba97700', '6299c8c9874d54a52ba976fd', '6299c8c9874d54a52ba976ff']
  }

]))

.then(()=>{
  console.log(`${Questions.length} Questions successfully created`)
//   mongoose.connection.close()
})
.catch((err)=>console.log("couldn't add the Questions", err))