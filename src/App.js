import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterTasksButton from "./components/FilterTasksButton";

function App(props) {
  const taskList = props.tasks.map(task => <Todo name={task.name} id={task.id} isComplete={task.isComplete} key={task.id} />)
  const [tasks, setTasks] = useState(taskList);
  function addTask(task) {
    console.log("adding task " + task);
    let taskLen = taskList.length;
    taskList.push(<Todo name={task} id={"todo-" + taskLen} isComplete={false} key={"todo-"+taskLen}/>)
    setTasks(taskList);
  }
  console.log(props);
  console.log(taskList);
  return (
    <div className="todoapp stack-large">
      <h1> TodoMatic </h1>
      <Form addTask={addTask} />

      <div className="filters btn-group stack-exception">
        <FilterTasksButton />
        <FilterTasksButton />
        <FilterTasksButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks}
      </ul>
    </div>
  );
}

export default App;
