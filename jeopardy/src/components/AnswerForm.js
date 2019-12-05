import React from 'react'

import useForm from '../utils/useForm'

const AnswerForm = props => {

    const { values, handleChange, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                values={values.answer}
                name={"answer"} />
        </form>
    )
}

export default AnswerForm