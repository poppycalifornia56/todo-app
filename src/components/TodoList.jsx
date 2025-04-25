import { useState } from "react";
import tasksData from "../data/tasks.json";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

function TodoList() {
  const [tasks, setTasks] = useState(tasksData);
  const [editingItem, setEditingItem] = useState(null);

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleAddItem = (newItem) => {
    setTasks([...tasks, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    setTasks(
      tasks.map((task) => (task.id === updatedItem.id ? updatedItem : task))
    );
    setEditingItem(null);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🧾 Task List</h2>
      <AddItemForm onAddItem={handleAddItem} />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((item, index) => (
          <div key={index} style={{ marginBottom: "0.5rem" }}>
            {editingItem && editingItem.id === item.id ? (
              <EditItemForm
                item={editingItem}
                onUpdateItem={handleUpdateItem}
                onCancel={() => setEditingItem(null)}
              />
            ) : (
              <Link
                to={`/item/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem
                  item={item}
                  index={index}
                  onDelete={handleDelete}
                  onEdit={() => setEditingItem(item)}
                  onToggleComplete={() => toggleComplete(item.id)}
                />
              </Link>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
