import React from 'react';
import Todo from "../Todo/Todo";
import './TodoList.css';

class TodoList extends React.Component {

    state = {
        todos: [{task: "Feed the cat"}, {task: "Work!"}]
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />
        })
        return (
            <div className="TodoList">
                <h1>Todo List!</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;
