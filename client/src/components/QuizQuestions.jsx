import React, {Component} from 'react';
import Question from '../services/Question'
import Questions from '../services/Questions'
import ApiHelper from '../services/ApiHelper'
import QuestionCard from '../components/QuestionCard'

class QuizQuestions extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      questions: []
    }

    this.apiHelper = new ApiHelper()
    this.questions = new Questions();
    this.getQuizQuestions.bind(this)



  }

  getQuizQuestions(){
    console.log(this.questions)
        const myQuestions = this.questions.getQuestions("https://opentdb.com/api.php?amount=10&type=multiple", (questions)=>{
          this.setState({questions:questions})
        })

  }



  componentDidMount(){

    this.getQuizQuestions();


    // var url = "https://opentdb.com/api.php?amount=10&type=multiple";
    // var request = new XMLHttpRequest()
    // request.open('GET', url)
    //
    // request.setRequestHeader("Content-Type", "application/json")
    // request.withCredentials = true
    //
    // request.onload = () => {
    //   if(request.status === 200){
    //     var data = JSON.parse(request.responseText)
    //     console.log(data)
    //     this.setState( { questions: data } )
    //     } else {
    //         return
    //       }
    //   }
    // request.send();

  }

  render(){
    console.log(this.state);
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
