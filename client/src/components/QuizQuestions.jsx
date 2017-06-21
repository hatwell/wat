import React, {Component} from 'react';
import Question from '../services/Question'
import Questions from '../services/Questions'
import ApiHelper from '../services/apiHelper'
import QuestionCard from '../components/QuestionCard'



class QuizQuestions extends React.Component {

  constructor(props){

    super(props)

    this.state = {
      questions: this.props.questions,
      questionAnswerCorrectly: []
    }

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

    if(event.target.innerText === this.props.correctAnswer){
      this.state.questionAnswerCorrectly.push(this.props.myIndex)

    }
  }


  componentDidMount(){

    this.getQuizQuestions(this.props.categoryIndex);
  }

  render(){
    console.log(this.state)

    return (
      <div>
      {
      this.props.questions.map((question, index) => {
        // console.log(question, index)
        return <QuestionCard question={question.question}
                myindex={index}
                category={question.category}
                answer1={question.answers[0]}
                answer2={question.answers[1]}
                answer3={question.answers[2]}
                answer4={question.answers[3]}
                correctAnswer={question.correct_answer.toUpperCase()}
                handleAnswerClick={this.props.handleAnswerClick}/>
      })
    }
      </div>
    )
  }

}

export default QuizQuestions
