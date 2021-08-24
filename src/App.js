import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterTasksButton from "./components/FilterTasksButton";



function App(props) {
  function addTask(task) {
    alert("Task added " + task);
  }
  console.log(props);
  const taskList = props.tasks.map(task => <Todo task={task.task} id={task.id} isComplete={task.isComplete} key={task.id} />)
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
        {taskList}
      </ul>
    </div>
  );
}

export default App;
