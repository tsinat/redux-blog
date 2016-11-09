// src/components/todoForm.js

import React from 'react'

export default (props) => {
    
    return (
        <div className=" text-center">
            <div className="col-sm-6 ">
                <form className="form-inline" onSubmit={ props.addTodo }>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={props.term}
                            placeholder="add todo"
                            onChange={ props.handleChange }
                            />
                        <button className="btn btn-default">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
