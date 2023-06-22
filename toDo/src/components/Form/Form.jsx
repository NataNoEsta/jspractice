import { useEffect, useState } from "react";

function Form(task) {
	const [taskname, setTaskname] = useState("");

	const handleInput = (e) => {
		setTaskname(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		task.addTask(taskname);
		
    setTaskname("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="label-wrapper">
				<label
					htmlFor="new-todo-input"
					className="label__lg">
					What needs to be done?
				</label>
			</h2>
			<input
				type="text"
				id="new-todo-input"
				className="input input__lg"
				name="text"
				value={taskname}
				onChange={handleInput}
			/>
			<button
				type="submit"
				className="btn btn__primary btn__lg">
				Agregar
			</button>
		</form>
	);
}
export default Form;
