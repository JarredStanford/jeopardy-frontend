import React from 'react'
import styled from 'styled-components'

const Score = props => {
    return (
        <>
            <LightBar>
                <Light />
                <Light />
                <Light />
                <Light />
                <Light />
                <Light />
                <Light />
                <Light />
                <Light />
            </LightBar>
            <Podium>
                <ScoreBox>
                    ${props.total}
                </ScoreBox>
                <NameCard>
                    JARRED
            </NameCard>
            </Podium>
        </>
    )
}

export default Score

const Podium = styled.div`
background-color: black
height: 15rem;
width: 20rem;
padding-left: 1rem;
padding-top: 1rem;
text-shadow: 2px 2px 4px #000000;`

const LightBar = styled.div`
background-color: lightgrey;
width: 20rem;
height: .5rem;
padding: 2%;
margin-bottom: 2%;
display: flex;
justify-content: space-between;
`

const Light = styled.div`
background-color: darkred;
width: 1.5rem;
height: .5rem;`

const ScoreBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: blue;
width: 18rem;
height: 4rem;
color: white;
font-size: 3rem;
text-shadow: 2px 2px 4px #000000;
padding: 2%;
margin-bottom: 2%;
border: 1px solid black`

const NameCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: blue;
width: 18rem;
height: 8rem;
color: white;
font-size: 4rem;
padding: 2%;`