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
                <h1>Todo List!</h1>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;
