import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render() {
        return (
            <div className="Todo">
                <button>Edit</button>
                <button onClick={this.props.removeTodo}>X</button>
                <li>{this.props.task}</li>
            </div>
        );
    }
}

export default Todo;
