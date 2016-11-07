// src/components/todoItem.js

import React from 'react'

export default (props) => {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td className="col-sm-4">{props.todo.id}</td>
                    <td className="col-sm-4">{props.todo.text}</td>
                    <td className="col-sm-4"><button className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
    )
}
