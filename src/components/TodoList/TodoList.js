import React from 'react';
import Todo from "../Todo/Todo";
import './TodoList.css';
import NewTodoForm from "../NewTodoForm/NewTodoForm";

class TodoList extends React.Component {

    state = {
        todos: [{task: "Feed the cat"}, {task: "Work!"}]
    }

    create = newTodo => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />
        })
        return (
            <div className="TodoList">
                <h1>Todo List!</h1>
                <NewTodoForm createTodo={this.create} />
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;
