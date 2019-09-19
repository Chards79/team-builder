import React, { useState } from "react";

const Form = props => {
	console.log(props);
	const [info, setInfo] = useState({
		name: "",
		email: "",
		role: ""
	});

	const changeHandler = event => {
		setInfo({ ...info, [event.target.name]: event.target.value });
		console.log(event.target.name);
	};

	const submitForm = event => {
		event.preventDefault();
		const newInfo = {
			...info,
			id: Date.now()
		};
		props.addMember(newInfo);
		setInfo({ name: "", email: "", role: "" });
	};
	return (
		<form onSubmit={submitForm}>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				name="name"
				value={info.name}
				onChange={changeHandler}
			/>
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				name="email"
				value={info.email}
				onChange={changeHandler}
			/>
			<label htmlFor="role">Role:</label>
			<input
				type="text"
				name="role"
				value={info.role}
				onChange={changeHandler}
			/>
			<button className="submit-button" type="submit">
				Create Member
			</button>
		</form>
	);
};

export default Form;
