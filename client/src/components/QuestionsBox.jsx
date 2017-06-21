import React, {Component} from 'react';
import Question from '../services/question'
import Questions from '../services/questions'
import ApiHelper from '../services/ApiHelper'
import CategorySelector from '../components/CategorySelector'
import QuestionCard from '../components/QuestionCard'
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem';
import QuizRequestHelper from '../services/quizRequestHelper'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import QuizQuestions from '../components/QuizQuestions'
import Snackbar from 'material-ui/Snackbar'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog'



//adds support for touchTap

class QuestionsBox extends React.Component {

  constructor(props){
    var helper = new QuizRequestHelper()
    super(props)
    this.state = {
      open:false,
      selectedIndex: 0,
      categories: helper.categories,
      questions: [],
      selectorValue: 9,
      correctAnswers:0
    }
    this.questions = new Questions()
    this.handleChange = this.handleChange.bind(this)
    this.buildOptions = this.buildOptions.bind(this)
    this.handleAnswerClick = this.handleAnswerClick.bind(this)
    this.getQuizQuestions = this.getQuizQuestions.bind(this)
    this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this)
  }



//creates the dropdown selector
  buildOptions() {
       var arr = this.state.categories.map(function(category, index){
         return <MenuItem key={index} value={index+9} primaryText={category}/>
       })
       return arr;
   }

//gets index for question category from the dropdown selector
  handleChange(event, index, value){
    var category = event.target.innerText
    const categoryIndex = this.state.categories.indexOf(category) + 9
    this.setState({ selectedIndex: categoryIndex, selectorValue:value});
  }

//gets questions
   getQuizQuestions(index){
     const url = "https://opentdb.com/api.php?amount=10&type=multiple&category=" + index;
     const myQuestions = this.questions.getQuestions(url, (questions)=>{
       this.setState({questions:questions})
       console.log(this.state)
     })

   }

//handles category selector
   handleSelectButtonClick(event){
     console.log("select button click");
     this.getQuizQuestions(this.state.selectedIndex)
     this.setState({correctAnswers:0})
   }

//handles click on answer options
   handleAnswerClick(event, correctAnswer){
     let answerCount = this.state.correctAnswers
     if(event.target.innerText === correctAnswer) {

       answerCount += 1
       this.setState({correctAnswers:answerCount})
       this.setState({
            open: true,
          });

     }

   }

  render(){

    return (
      <div>
        <div className="sticky-section">
            <div className="selector">

              {/*selector and selector button area */}
              <Card>

                  <SelectField
                    className="category-selector"
                    onChange={this.handleChange}
                    value={this.state.selectorValue}
                    autoWidth={true}
                    maxHeight={200}
                    floatingLabelFixed = {true}
                    floatingLabelText="Select a Quiz Category!">

                    {
                      this.buildOptions()
                  }

                  </SelectField>

                  <RaisedButton className="quiz-button" label="let's quiz!" onTouchTap={this.handleSelectButtonClick}/>

              </Card>
            </div>
            <div>
              <Card>
                <CardTitle>Correct Answers: {this.state.correctAnswers}</CardTitle>
              </Card>
            </div>
          </div>

        <div className="questions">

          <QuizQuestions questions={this.state.questions} categoryIndex={this.state.selectedIndex} handleAnswerClick={this.handleAnswerClick}/>
        </div>

        <Snackbar
          open={this.state.open}
          message="that's the correct answer!"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
    console.log(this.state.questions)
  }



}

export default QuestionsBox
