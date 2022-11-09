function TaskCard({task, deleteTask}) {

  function mostrarAlerta() {
    alert("Elimando...");
  }
  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Elimar tarea</button>
    </div>
  )
}

export default TaskCard