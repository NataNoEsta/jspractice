import React, { useState } from "react";
import Form from "../Form/Form";

export const Todo = (task) => {

const { id, name, completed } = task
 
	return (
		<li className="todo stack-small">
			<div className="c-cb">
				<input
					id={id}
					type="checkbox"
					name={name}
					defaultChecked={completed}
          onChange={() => task.toggleTaskCompleted(id)}
				/>
				<label
					className="todo-label"
					htmlFor={id}>
					{name}
				</label>
			</div>
			<div className="btn-group">
				<button
					type="button"
					className="btn"
					onClick={() => task.editTask(id, name)}>
					Edit <span className="visually-hidden">{name}</span>
				</button>
				<button
					type="button"
          onClick={()=> task.deleteTask(id)}
					className="btn btn__danger">
					Delete <span className="visually-hidden">{name}</span>
				</button>
			</div>
		</li>
	);
};
