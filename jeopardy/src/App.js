import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import styled from 'styled-components'

import useForm from './utils/useForm'
import AnswerForm from './components/AnswerForm';
import Question from './components/Question';
import Score from './components/Score'

function App() {

  const [question, setQuestion] = useState()
  const [total, setTotal] = useState(0)

  const { values, handleChange, handleSubmit } = useForm(checkAnswer);

  useEffect(() => {
    const getQuestion = async () => {
      const result = await axios.get('http://localhost:8000/answers/random')
      setQuestion(result.data)
    }
    getQuestion()

    return setQuestion()
  }, [])

  const nextQuestion = async () => {
    const result = await axios.get('http://localhost:8000/answers/random')
    setQuestion(result.data)
  }

  function checkAnswer() {
    if (question.answer.toLowerCase().includes(values.answer.toLowerCase())) {
      console.log("Correct!")
      setTotal(total => total += Number(question.value.replace(/[$,]+/g, '')))
    } else {
      console.log("Incorrect!" + question.answer)
      setTotal(total => total -= Number(question.value.replace(/[$,]+/g, '')))
    }
    nextQuestion()
  }

  if (question === undefined) return <div>Loading...</div>

  return (
    <MainContainer>
      <Question question={question} />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          values={values.answer}
          name={"answer"} />
      </form>
      <Score total={total} />
    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%`