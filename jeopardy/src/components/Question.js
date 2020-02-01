import React from 'react'

import styled from 'styled-components'

const Question = props => {

    const [reveal, setReveal] = React.useState(false)

    React.useEffect(() => {
        setReveal(false)
        setTimeout(() => setReveal(true), 2000)
    }, [props.question])


    return (
        <>
            <ScreenHolder>
                <CategoryBox>
                    {props.question && props.question.category.title.toUpperCase()}
                </CategoryBox>

                {!reveal && (
                    <QuestionBox onClick={() => setReveal(true)} style={{ color: 'gold', fontSize: '6rem' }}>
                        ${props.question.value}
                    </QuestionBox>
                )}

                {reveal && (
                    <QuestionBox style={{ fontFamily: "'Noto Serif', serif" }}>
                        {props.question.question.toUpperCase()}
                    </QuestionBox>
                )}

            </ScreenHolder>
        </>
    )
}

export default Question

const ScreenHolder = styled.div`
background-color: black;
width: 20rem;
padding: 1rem;
`

const CategoryBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: 1px solid black;
height: 9rem;
width: 18rem;
padding: 2%;
background-color: blue;
color: white;
margin-bottom: 2%;
font-size: 2.5rem;
text-align: center;
text-shadow: 2px 2px 4px #000000;
line-height: 1.15;`

const QuestionBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: 1px solid black
height: 9rem;
width: 18rem;
padding: 2%;
background-color: blue;
color: white;
font-size: 1.25rem;
text-shadow: 2px 2px 4px #000000;
text-align: center;`