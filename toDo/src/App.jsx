import React, { useState } from "react";
import { Todo } from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import FilterButton from "./components/FilterButton/FilterButton";
import { nanoid } from "nanoid";

function App(props) {
	const [tasks, setTasks] = useState(props.tasks);

	function addTask(name) {
		const newTask = {
			id: `todo-${nanoid()}`,
			name,
			completed: false,
		};
		setTasks([...tasks, newTask]);
		console.log(name);
	}

	const HeadingText = () => {
		return taskList.length >= 1
			? `${taskList.length} tasks remaining`
			: `${taskList.length} task remaining`;
	};

	function toggleTaskCompleted(id) {
		const updateTasks = tasks.map((task) => {
			if (id === task.id) {
				return {
					...task,
					completed: !task.completed,
				};
			}
			return task;
		});
		setTasks(updateTasks);
		console.log(tasks[0]);
	}
	function deleteTask(id) {
		const restoTasks = tasks.filter((task) => id !== task.id);
		setTasks(restoTasks);
	}
	function editTask(id, newName) {
		const editedTaskName = tasks.map((task) => {
			if (id === task.id) {
				return {
					...task,
					name: newName,
				};
			}
			return task;
		});
		setTasks(editedTaskName);
	}
	const taskList = tasks.map((task) => (
		<Todo
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
			toggleTaskCompleted={toggleTaskCompleted}
			deleteTask={deleteTask}
			editTask={editTask}
		/>
	));
	return (
		<div className="todoapp stack-large">
			<h1>To Do App</h1>

			<Form addTask={addTask} />

			<h2 id="list-heading">{tasks && <HeadingText />}</h2>
			<ul className="todo-list stack-large stack-exception">
				{tasks != 0 ? (
					taskList
				) : (
					<>
						<p>No hay tareas</p>
					</>
				)}
			</ul>
		</div>
	);
}

export default App;
