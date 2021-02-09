import React from "react";
import TodoItem from "./TodoItem";


function TodoList(props) {
    return <ul className="todoListItems">
    {props.todos.map(
        (todo, idx) => <TodoItem key={todo.id} 
        todo={todo} 
        deleteTodo={props.deleteTodo} 
        toggleComplete={props.toggleComplete}
        idx={idx + 1}
        />)}
    </ul>
}




export default TodoList