// src/components/app.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions';

import TodoFrom from './todoForm';
import TodoItem from './todoItem';

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
        this.props.addTodo(this.state.term);
    }
    displayTodo(){
        const todoList = this.props.todo.map((todo) => {
            console.log(todo);
            return (
                <TodoItem key={todo.id} todo={todo}/>
            )
        });
        return todoList;
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
function mapPropToState(state) {
    return {
        todo: state.todo
    };
}

export default connect(mapPropToState, action)(App);
