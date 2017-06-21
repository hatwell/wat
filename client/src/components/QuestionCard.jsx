import React from 'react'
import ReactDOM from 'react-dom'
import Paper from 'material-ui'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'

class QuestionCard extends React.Component {
  constructor(props){
    super(props)

    this.state = {
    }

    this.handleAnswerClick = this.handleAnswerClick.bind(this)
    this.getInitialState =this.getInitialState.bind(this)
  }

  handleAnswerClick(event){
    console.log(event.target.innerText)
    if(event.target.innerText === this.props.correctAnswer){
      console.log("yes! the correct answer is: ", this.props.correctAnswer)
    }
  }

  getInitialState() {
    return {
      bgColor: 'red'
    }
  }

  render(){
    return (
      <Card>
        <CardTitle title={this.props.question} subtitle={this.props.category}/>

          <CardActions>
            <RaisedButton label={this.props.answer1} fullWidth={true} onTouchTap={this.handleAnswerClick} />
            <RaisedButton label={this.props.answer2} fullWidth={true} onTouchTap={this.handleAnswerClick} />
            <RaisedButton label={this.props.answer3} fullWidth={true} onTouchTap={this.handleAnswerClick} />
            <RaisedButton label={this.props.answer4} fullWidth={true} onTouchTap={this.handleAnswerClick} />
          </CardActions>

      </Card>

    )
  }

}


export default QuestionCard;
