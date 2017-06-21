import React from 'react'
import ReactDOM from 'react-dom'
import Paper from 'material-ui'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'

class QuestionCard extends React.Component {
  constructor(props){
    super(props)

  this.handleAnswerSelected = this.handleAnswerSelected.bind(this)

  }

  handleAnswerSelected(event){
    this.props.handleAnswerClick(event, this.props.correctAnswer)

  }

  render(){
    return (
      <Card>
        <CardTitle title={this.props.question} subtitle={this.props.category}/>

          <CardActions>
            <RaisedButton label={this.props.answer1} fullWidth={true} onTouchTap={this.handleAnswerSelected} />
            <RaisedButton label={this.props.answer2} fullWidth={true} onTouchTap={this.handleAnswerSelected} />
            <RaisedButton label={this.props.answer3} fullWidth={true} onTouchTap={this.handleAnswerSelected} />
            <RaisedButton label={this.props.answer4} fullWidth={true} onTouchTap={this.handleAnswerSelected} />
          </CardActions>

      </Card>

    )
  }

}


export default QuestionCard;
