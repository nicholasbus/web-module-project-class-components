import React from 'react'

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({
            todo: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type='text'
                    name='todo'
                    onChange={this.handleChange}
                    value={this.state.todo}
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm