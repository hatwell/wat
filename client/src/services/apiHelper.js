import Question from './question.js'

class ApiHelper {

  makeRequest(url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.addEventListener('load', function() {
        if (request.status !== 200) return;
        var jsonString = request.responseText;
        var resultsObject = JSON.parse(jsonString);
        callback(resultsObject);
      });
      request.send();
    }

    allQuestions(url, callback) {
      this.makeRequest(url, function (results) {
        var questions = this.populateQuestions(results)
        callback(questions);
      }.bind(this));
    }

    populateQuestions(results) {
        var questions = results.results.map(function (resultObject) {
          return new Question(resultObject)
        });
        return questions;
      }

}

export default ApiHelper
