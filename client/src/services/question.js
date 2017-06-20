var Question = function(params){
    this.category = params.category;
    this.question = params.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace();
    this.correct_answer = params.correct_answer;
    this.incorrect_answers = params.incorrect_answers;

    //this created an array of all possible answers
    this.answers = params.incorrect_answers.slice()
    this.answers.push(params.correct_answer)
    this.answers = this.shuffle(this.answers);
    this.answers = this.answers.map(function(answer){
      return answer.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')
    }.bind(this))

  }

Question.prototype = {


  //the old classic fisher-yates shuffle
  shuffle: function(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
}

}


module.exports = Question;
