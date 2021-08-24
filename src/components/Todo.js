import React from "react";

export default function Todo(props) {
    console.log(props)
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.isComplete}/>
                <label className="todo-label" htmlFor="todo-0">
                    {props.task}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{props.task}</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">{props.task}</span>
                </button>
            </div>
        </li>
    );
}