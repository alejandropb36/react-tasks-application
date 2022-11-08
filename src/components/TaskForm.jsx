import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({title, description});
    setTitle('');
    setDescription('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Escribe tu tarea"
        name="title"
        onChange={(e) => {
            setTitle(prevTitle => prevTitle = e.target.value);
        }}
        value={title}
        autoFocus
      />

      <textarea name="description"
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => {
            setDescription(prevDescription => prevDescription = e.target.value);
        }}
        value={description}
      ></textarea>

      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
