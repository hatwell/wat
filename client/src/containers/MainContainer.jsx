import React from 'react'
import ReactDOM from 'react-dom'

import CategorySelector from '../components/CategorySelector'
import QuestionCard from '../components/QuestionCard'
import QuizQuestions from '../components/QuizQuestions'

class MainContainer extends React.Component {


  render() {
    return (
      <div>

        <CategorySelector/>
        <QuizQuestions />

      </div>
    )

  }

}

export default MainContainer;
