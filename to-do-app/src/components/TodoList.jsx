import { useState } from "react";
import tasksData from "../data/tasks.json";
import ListItem from "./ListItem";

function TodoList() {
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🧾 Task List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
