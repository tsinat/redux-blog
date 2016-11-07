import React, { Component } from 'react';
import TodoFrom from './todoForm';

class App extends Component {
    constructor(props){
        super(props)

        this.displayTodo = this.displayTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { term: "" };
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({ term: e.target.value})
    }
    addTodo(e) {
        e.preventDefault();
        //dispatch action
    }
    displayTodo(){
        //display todos to the view
    }
  render() {
    return (
        <div className="row">
            <TodoFrom
                term={ this.state.term }
                addTodo={ this.addTodo }
                handleChange={ this.handleChange}
                />
            { this.displayTodo()}
        </div>
    );
  }
}

export default App;
