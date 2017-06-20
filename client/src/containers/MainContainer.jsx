import React from 'react'
import ReactDOM from 'react-dom'

import CategorySelector from '../components/CategorySelector'
import QuestionCard from '../components/QuestionCard'
import QuizQuestions from '../components/QuizQuestions'

class MainContainer extends React.Component {


  render() {
    return (
      <div>

        <p>here's my app lol</p>
        <CategorySelector />
        <QuizQuestions />
        {/* <QuestionCard question="What is the best animal?" category="animals" answer1="cat" answer2="dog" answer3="lion" answer4="bear" /> */}

      </div>
    )

  }

}

export default MainContainer;
