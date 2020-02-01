import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import styled from 'styled-components'

import useForm from './utils/useForm'
import AnswerForm from './components/AnswerForm';
import Question from './components/Question';
import Score from './components/Score'

import { Form, Message } from 'semantic-ui-react'

function App() {

  const [question, setQuestion] = useState()
  const [total, setTotal] = useState(0)
  const [message, setMessage] = useState(false)
  const [answer, setAnswer] = useState('')

  const { values, handleChange, handleSubmit } = useForm(checkAnswer);

  /*useEffect(() => {
    const getQuestion = async () => {
      const result = await axios.get('http://localhost:8000/answers/random')
      setQuestion(result.data)
    }
    getQuestion()

    return setQuestion()
  }, [])*/

  const nextQuestion = async () => {
    const result = await axios.get('http://jservice.io/api/random')
    setQuestion(result.data[0])
  }

  useEffect(() => {

    nextQuestion()

    return setQuestion()

  }, [])

  function checkAnswer() {
    setAnswer(question.answer)
    if (question.answer.toLowerCase().includes(values.answer.toLowerCase())) {
      setTotal(total => total += Number(question.value))
      setMessage('Correct!')
    } else {
      setMessage('Incorrect!')
      setTotal(total => total -= Number(question.value))
    }
    nextQuestion()
    setTimeout(() => setMessage(false), 2000)
  }

  if (question === undefined) return <div>Loading...</div>

  return (
    <MainContainer>
      <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Jeopardy%21_logo.svg' alt='logo' style={{ width: '20rem' }} />
      <Question question={question} />
      <div>
        {!message && (
          <Form onSubmit={handleSubmit} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <Form.Input
              size='large'
              autoFocus
              onChange={handleChange}
              values={values.answer}
              name={"answer"}
              style={{ width: '20rem' }} />
          </Form>
        )}
        {message && (message === 'Correct!' ? <Message size='small' success floating>{message}</Message> : <Message size='small' error content={'Incorrect! ' + answer.toUpperCase()} />)}
        <Score total={total} />
      </div>
    </MainContainer>
  )
}

export default App;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;`