import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoTitle: ""
        }
    }
    
    changeHandler = e => {
        this.setState({
            todoTitle: e.target.value
        })
    }
    
    clickHandler = e => {
        let newItem = this.state.todoTitle;
        this.props.addTodo(newItem);
        this.setState({todoTitle: ""})
    }
    
    render() {
        return (
            <div className="addTodo">
            <input
                name="todoTitle"
                type="text" 
                autoFocus 
                placeholder="add new todo ..." 
                onChange={this.changeHandler} 
                value={this.state.todoTitle} 
            />
            <button className="btnAdd" onClick={this.clickHandler}>Add</button>
            <hr/>
            </div>
            )
        }
    }
    
    export default AddTodo