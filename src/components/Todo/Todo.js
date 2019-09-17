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
                <div>
                    <form onSubmit={this.handleUpdate}>
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
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.props.removeTodo}>X</button>
                    <li className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>{this.props.task}</li>
                </div>
        )
    }
}

export default Todo;
