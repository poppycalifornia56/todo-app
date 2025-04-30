import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";
import AddItemForm from "./AddItemForm";
import EditItemForm from "./EditItemForm";

function TodoList({ tasks, setTasks }) {
  const [editingItem, setEditingItem] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleAddItem = (newItem) => {
    setTasks([...tasks, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    setTasks(
      tasks.map((task, i) =>
        i === updatedItem.index ? updatedItem.task : task
      )
    );
    setEditingItem(null);
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const viewTaskDetails = (index) => {
    navigate(`/item/${index}`);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "1rem",
        backgroundColor: "#f8fafc",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "1.5rem",
          color: "#3b4a5f",
          fontWeight: "600",
        }}
      >
        📝 Task List
      </h2>
      <AddItemForm onAddItem={handleAddItem} />

      <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
        {tasks.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 2px 4px rgba(124, 144, 219, 0.1)",
              borderLeft: "4px solid #7c90db",
              cursor: "pointer",
            }}
            onClick={() => viewTaskDetails(index)}
          >
            {editingItem && editingItem.index === index ? (
              <EditItemForm
                item={{ ...editingItem.task, index }}
                onUpdateItem={handleUpdateItem}
                onCancel={() => setEditingItem(null)}
              />
            ) : (
              <ListItem
                item={item}
                index={index}
                onDelete={handleDelete}
                onEdit={() => setEditingItem({ task: item, index })}
                onToggleComplete={() => toggleComplete(index)}
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
