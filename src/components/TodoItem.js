import React from "react";


const TodoItem = ({todo, deleteTodo, toggleComplete, idx}) => {
	const deleteHandler = e => {
		deleteTodo(todo.id)
	}
	const handleToggleComplete = e => {
		toggleComplete(todo.id);
	}

	return (
		<li>
			<span className="todoID">{idx}.</span>
			<span className={"title "+ (todo.completed ? "completed" : "")} onClick={handleToggleComplete}>{todo.title}</span>
			<div className="removeTodo" onClick={deleteHandler}><i className="far fa-trash-alt"></i></div>
			<div className="togleComplete" onClick={handleToggleComplete}><i className={"far "+(todo.completed ? "fa-check-square":"fa-square")}></i></div>
		</li>
	 );
}

export default TodoItem