import './App.css';
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodosCount from "./components/TodosCount";
import React from 'react'


class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      warningMessage: '',
      todos:[]
    }
    
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => {

        const choresForToday = [];
        for(let i=0; i< 5; i++) {
            choresForToday.push(result[Math.round(Math.random()* 200)]);
        }

        const uniqueChores = [...new Set(choresForToday)]

        this.setState({
            todos: uniqueChores
        })
    })
  }
  
  addTodo(todo) {


    if(!todo) {
        this.setState({warningMessage: 'Cannot add empty message'})
        return;
    } 


    let newTodo = {
      id: this.state.todos[this.state.todos.length - 1].id + 1, 
      title: todo, 
      completed: false
    }
    let newTodos = [...this.state.todos, newTodo]
    this.setState({warningMessage: '', todos: newTodos})
  }
  
  deleteTodo(idx) {
    const todos = this.state.todos.filter(todo=>todo.id !== idx);
    this.setState({todos});
  }
  
  toggleComplete = (todoId)=>{
    const todos = this.state.todos.map(
      todo=>todo.id===todoId ? {...todo,completed:!todo.completed} : {...todo}
      );
      this.setState({warningMessage: '', todos});
  }
    
    render() {
      return (
        <div className="page">
        <Header />
        <main className="todoApp">
        <AddTodo addTodo={this.addTodo}/>
        <div className="warningMessage">{this.state.warningMessage}</div>
        <TodoList 
        todos={this.state.todos} 
        deleteTodo={this.deleteTodo}
        toggleComplete={this.toggleComplete}
        />
        <TodosCount count={this.state.todos.length}/>
        </main>
        </div>
        );
      }
    }
    
    export default App;
    