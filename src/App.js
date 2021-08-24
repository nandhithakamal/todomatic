import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterTasksButton from "./components/FilterTasksButton";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => <Todo name={task.name} id={task.id} isComplete={task.isComplete} key={task.id} />)
  
  function addTask(task) {
    let newTask = {name: task, id: "todo-" + nanoid(), isComplete:false};
    setTasks([...tasks, newTask]);
  } 
  return (
    <div className="todoapp stack-large">
      <h1> 
        TodoMatic 
      </h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterTasksButton />
        <FilterTasksButton />
        <FilterTasksButton />
      </div>
      <h2 id="list-heading">
        {taskList.length} tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
