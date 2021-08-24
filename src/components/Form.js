import React, { useState } from "react";

export default function Form(props) {
    const [taskName, setTaskName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(taskName);
        props.addTask(taskName);
        setTaskName("");
    }
    function handleChange(e){
        setTaskName(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What do you need to do?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={taskName}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg" >
                Add
            </button>
        </form>
    );
}
