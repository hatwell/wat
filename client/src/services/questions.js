import Question from './question'
import ApiHelper from './apiHelper'

class Questions {

  constructor(){
    this.apiHelper = new ApiHelper()

  }

//TODO sort out url generator
  getQuestions(url, callback){
    this.apiHelper.allQuestions(url, function(questions){
       callback(questions);
    }.bind(this))
  }

}

export default Questions
