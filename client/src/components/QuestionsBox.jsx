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
import QuizQuestions from '../components/QuizQuestions'



//adds support for touchTap

class QuestionsBox extends React.Component {

  constructor(props){
    var helper = new QuizRequestHelper()
    super(props)
    this.state = {
      selectedIndex: "",
      categories: helper.categories,
      questions: [],
      selectorValue:""
    }
    this.questions = new Questions()
    this.handleChange = this.handleChange.bind(this)
    this.buildOptions = this.buildOptions.bind(this)
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
    const categoryIndex = this.state.categories.indexOf(category) + 10
    this.setState({ selectedIndex: categoryIndex, selectorValue:value});
  }


   getQuizQuestions(index){
     const url = "https://opentdb.com/api.php?amount=10&type=multiple&category=" + index;
     const myQuestions = this.questions.getQuestions(url, (questions)=>{
       this.setState({questions:questions})
       console.log(this.state)
     })

   }

   handleSelectButtonClick(event){
     console.log("I was clicked")
     this.getQuizQuestions(this.state.selectedIndex)
   }

  render(){

    console.log("im rendering watch me")
    return (
      <div>
        <div className="selector">
          <Paper zDepth={1}>

              <SelectField
                onChange={this.handleChange}
                value={this.state.selectorValue}
                autoWidth={true}
                maxHeight={200}
                floatingLabelText="Select a Quiz Category!">

                {
                  this.buildOptions()
              }

              </SelectField>

              <FlatButton label="let's quiz!" onTouchTap={this.handleSelectButtonClick}/>

          </Paper>
        </div>

        <div className="questions">

          <QuizQuestions questions={this.state.questions} categoryIndex={this.state.selectedIndex}/>
        </div>
      </div>
    )
    console.log(this.state.questions)
  }



}

export default QuestionsBox
