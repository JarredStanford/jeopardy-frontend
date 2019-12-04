import React, { useState } from "react";

//All form functions and buttons are available in this custom hook. Simply import as seen in EditProfile.

const useForm = callback => {
	const [values, setValues] = useState({});

	const handleSubmit = event => {
		if (event) event.preventDefault();
		try {
			callback();
		}
		catch{ }
	};

	const handleChange = event => {
		event.persist();
		setValues(values => ({
			...values,
			[event.target.name]: event.target.value
		}));
	};

	return {
		handleChange,
		handleSubmit,
		setValues,
		values
	};
};


export default useForm;
