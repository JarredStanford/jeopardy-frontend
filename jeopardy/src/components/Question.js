import React from 'react'

const Question = props => {
    return (
        <div>
            <div style={{ marginBottom: '2%' }}>
                {props.question.category}
            </div>
            <div>
                {props.question.question}
            </div>
            <div>
                {props.question.value}
            </div>
        </div>
    )
}

export default Question