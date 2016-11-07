import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props)

        this.displayTodo = this.displayTodo.bind(this);
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
        console.log('it is working');
    }
  render() {
    return (
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                <form className="form-inline" onSubmit={ this.addTodo.bind(this)}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.term}
                            placeholder="add todo"
                            onChange={ this.handleChange.bind(this)}
                            />
                        <button className="btn btn-default">Add</button>
                    </div>
                </form>

                { this.displayTodo()}

            </div>
        </div>
    );
  }
}

export default App;
