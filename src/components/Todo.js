import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p
                style={{textDecoration: this.props.todo.completed ? 'line-through' : ''}}
                onClick={() => this.props.complete(this.props.todo.id)}
            >
            {this.props.todo.task}
            </p> 
        )
    }
}

export default Todo