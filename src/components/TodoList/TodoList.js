import React from 'react';
import Todo from "../Todo/Todo";
import './TodoList.css';
import NewTodoForm from "../NewTodoForm/NewTodoForm";

class TodoList extends React.Component {

    state = {
        todos: []
    }

    create = newTodo => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    update = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo
        })
        this.setState({todos: updatedTodos})
    }
    toggleCompletion = id => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        this.setState({todos: updatedTodos})
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={() => this.remove(todo.id)}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />
        })
        return (
            <div className="TodoList">
                <h1>React Todo List! <span>A Simple React Todo List</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createTodo={this.create}/>
            </div>
        );
    }
}

export default TodoList;
