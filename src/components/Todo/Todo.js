import React from 'react';
import './Todo.css';

class Todo extends React.Component {

    state = {
        isEditing: false,
        task: this.props.task
    }

    toggleForm = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    handleUpdate = e => {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleToggle = e => {
        this.props.toggleTodo(this.props.id)
    }

    render() {
        return (
            this.state.isEditing ?
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div> :
                <div className="Todo">
                    <li
                        className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                        onClick={this.handleToggle}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i className="fas fa-pen"/>
                        </button>
                        <button onClick={this.props.removeTodo}>
                            <i className="fas fa-trash"/>
                        </button>
                    </div>
                </div>
        )
    }
}

export default Todo;
