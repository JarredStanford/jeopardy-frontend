import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

import useForm from './utils/useForm'

function App() {

  const [question, setQuestion] = useState()
  const [category, setCategory] = useState()
  const [total, setTotal] = useState(0)
  const [selected, setSelected] = useState()

  const { values, handleChange, handleSubmit } = useForm(checkAnswer);

  useEffect(() => {
    const getQuestion = async () => {
      const result = await axios.get('http://localhost:8000/answers/episodes')
    }
    getQuestion()

    return setQuestion()
  }, [])

  /*const nextQuestion = async () => {
    const result = await axios.get('http://localhost:8000/answers/random')
    setQuestion(result.data)
  }*/

  function checkAnswer() {
    console.log()
    if (selected.answer.toLowerCase().includes(values.answer.toLowerCase())) {
      console.log("Correct!")
      setTotal(total => total += Number(selected.value.replace(/[$,]+/g, '')))
    } else {
      console.log("Incorrect!" + question.answer)
      setTotal(total => total -= Number(selected.value.replace(/[$,]+/g, '')))
    }
  }

  if (question === undefined) return <div>Loading...</div>

  return (
    <>
      <div style={{ marginBottom: '2%' }}>
        {category}
      </div>
      <div>
        <div onClick={() => setSelected(question[0])}>{question[0].value}</div>
        <div onClick={() => setSelected(question[1])}>{question[1].value}</div>
        <div onClick={() => setSelected(question[2])}>{question[2].value}</div>
        <div onClick={() => setSelected(question[3])}>{question[3].value}</div>
        <div onClick={() => setSelected(question[4])}>{question[4].value}</div>
      </div>
      <div>
        {selected && selected.question}
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
