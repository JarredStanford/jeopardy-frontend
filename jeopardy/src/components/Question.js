import React from 'react'

import styled from 'styled-components'

const Question = props => {

    const [reveal, setReveal] = React.useState(false)

    React.useEffect(() => {
        setReveal(false)
    }, [props.question])


    return (
        <>
            <div style={{ marginBottom: '2%' }}>
                {props.question.category}
            </div>
            {!reveal && (
                <QuestionBox onClick={() => setReveal(true)}>
                    {props.question.value}
                </QuestionBox>
            )}
            {reveal && (
                <QuestionBox>
                    {props.question.question}
                </QuestionBox>
            )}

        </>
    )
}

export default Question

const QuestionBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: 1px solid black
height: 12rem;
width: 12rem;
padding: 2%;
background-color: blue;
color: white;`