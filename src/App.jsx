import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks";
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    const newTask = {
      id: tasks.length,
      title: task.title,
      description: task.description
    }
    setTasks([...tasks, newTask]);
  }


  return(
    <>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks}/>
    </>
  );
}

export default App;