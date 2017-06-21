var Question = function(params){
    this.category = params.category;
    this.question = this.cleanString(params.question)
    this.correct_answer = params.correct_answer;
    this.incorrect_answers = params.incorrect_answers;

    //this created an array of all possible answers
    this.answers = params.incorrect_answers.slice()
    this.answers.push(params.correct_answer)
    this.answers = this.shuffle(this.answers);
    this.answers = this.answers.map(function(answer){
      return this.cleanString(answer)
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
},

cleanString(string){
  string = string.replace(/&quot;/g, '\"')
  string = string.replace(/&#039;/g, '\'')
  string = string.replace(/&amp;/g, '&')
  string = string.replace(/&Uuml/g, 'Ü')
  string = string.replace(/&ldquo;/g, '\"')
  string = string.replace(/&rdquo;/g, '\"')
  string = string.replace(/&deg;C/g, '°')
  string = string.replace(/&eactute;/g, 'é')


  return string
}



}


module.exports = Question;
