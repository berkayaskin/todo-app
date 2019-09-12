import React from 'react';
import './Todo.css';

class Todo extends React.Component {

    state = {
    }

    render() {
        return (
            <div className="Todo">
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.task}</li>
            </div>
        );
    }
}

export default Todo;
