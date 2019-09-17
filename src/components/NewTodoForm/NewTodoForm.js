import React from 'react';
import './NewTodoForm.css'
import uuid from 'uuid/v4';

class NewTodoForm extends React.Component {

    state = {
        task: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false})
        this.setState({task: ""})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewTodoForm">
                <label htmlFor="task">New Todo: </label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    placeholder="New Todo"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;
