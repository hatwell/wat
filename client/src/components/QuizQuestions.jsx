import React, {Component} from 'react';
import Question from '../services/Question'
import Questions from '../services/Questions'
import ApiHelper from '../services/ApiHelper'
import QuestionCard from '../components/QuestionCard'



class QuizQuestions extends React.Component {

  constructor(props){
    super(props)
    // this.state = {
    //   questions: this.props.questions
    // }

    this.apiHelper = new ApiHelper()
    this.questions = new Questions();
    this.getQuizQuestions.bind(this)
    this.handleAnswerClick = this.handleAnswerClick.bind(this)

  }

  getQuizQuestions(categoryIndex){
        const url = "https://opentdb.com/api.php?amount=10&type=multiple&category=" + categoryIndex;
        const myQuestions = this.questions.getQuestions(url, (questions)=>{
          this.setState({questions:questions})
        })

  }


  handleAnswerClick(event){
    console.log(event.target.innerText)
    if(event.target.innerText === this.props.correctAnswer){
      console.log("yes! the correct answer is: ", this.props.correctAnswer)
    }
  }


  componentDidMount(){

    this.getQuizQuestions(this.props.categoryIndex);
  }

  render(){
    return (
      <div>
      {
      this.props.questions.map((question) => {

        return <QuestionCard question={question.question} category={question.category} answer1={question.answers[0]} answer2={question.answers[1]} answer3={question.answers[2]} answer4={question.answers[3]} correctAnswer={question.correct_answer.toUpperCase()} log={console.log(question.correct_answer)} handleAnswerClick={this.handleAnswerClick}/>
      })
    }
      </div>
    )
  }

}

export default QuizQuestions
