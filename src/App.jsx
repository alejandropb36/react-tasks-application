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
      id: tasks[tasks.length - 1].id + 1,
      title: task.title,
      description: task.description
    }
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    console.log(`Elimando tarea id: ${id} ...`);
    setTasks(tasks.filter(task => task.id !== id));
  }


  return(
    <>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export default App;