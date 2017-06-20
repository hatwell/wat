import React, {Component} from 'react';
import Question from '../services/Question'

class QuizQuestions extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidmount(){
    var url = "https://opentdb.com/api.php?amount=10&type=multiple";
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        var data = JSON.parse(request.responseText)
        console.log(data)
        this.setState( { questions: data } )
        } else {
            return
          }
      }
    request.send();

  }

  render(){
    return (
      <div>
      {
      this.state.questions.map(function(question){
        <QuestionCard question={question} category="animals" answer1="cat" answer2="dog" answer3="lion" answer4="bear"/>
      })
    }
      </div>
    )
  }

}

export default QuizQuestions
