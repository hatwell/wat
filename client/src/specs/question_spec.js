var assert = require('assert');
var Question = require('../services/question.js');


beforeEach(function(){
  question = new Question({
"category": "History",
"question": "What was William Frederick Cody better known as?",
"correct_answer": "Buffalo Bill",
"incorrect_answers": [
"Billy the Kid",
"Wild Bill Hickok",
"Pawnee Bill"
    ]
  })
})

describe('Question', function(){

  it('has a category', function(){
    assert.equal("History", question.category);
  })

  it('has answers array', function(){
    console.log(question.incorrect_answers)
    console.log(question.answers)
    assert.equal(4, question.answers.length);
  })
})
