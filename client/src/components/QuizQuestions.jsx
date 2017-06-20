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
    this.handleAnswerClick = this.handleAnswerClick.bind(this)



  }

  getQuizQuestions(){
    console.log(this.questions)
        const myQuestions = this.questions.getQuestions("https://opentdb.com/api.php?amount=10&type=multiple", (questions)=>{
          this.setState({questions:questions})
        })

  }


  handleAnswerClick(){

  }


  componentDidMount(){

    this.getQuizQuestions();
  }

  render(){
    return (
      <div>
      {
      this.state.questions.map(function(question){
        return <QuestionCard question={question.question} category={question.category} answer1={question.answers[0]} answer2={question.answers[1]} answer3={question.answers[2]} answer4={question.answers[3]}/>
      })
    }
      </div>
    )
  }

}

export default QuizQuestions
