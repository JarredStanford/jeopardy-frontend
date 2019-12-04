import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import styled from 'styled-components'

import useForm from './utils/useForm'

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
    <>
      <div style={{ marginBottom: '2%' }}>
        {question.category}
      </div>
      <div>
        {question.question}
      </div>
      <div>
        {question.value}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          values={values.answer}
          name={"answer"} />
      </form>
      <div>
        Total: ${total}
      </div>
    </>
  )
}

export default App;
