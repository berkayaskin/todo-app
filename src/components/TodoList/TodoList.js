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

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                removeTodo={() => this.remove(todo.id)}
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
