import React, { useState, useEffect } from "react";

function EditItemForm({ item, onUpdateItem, onCancel }) {
  const [task, setTask] = useState(item.task);
  const index = item.index;

  useEffect(() => {
    setTask(item.task);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const updatedTask = {
      task,
      completed: item.completed,
    };

    onUpdateItem({ task: updatedTask, index });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1.5rem",
        padding: "1.5rem",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(124, 144, 219, 0.1)",
        border: "1px solid #e0e6ed",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "#3b4a5f",
            fontWeight: "500",
          }}
        >
          Task
        </label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #e0e6ed",
            backgroundColor: "#f8fafc",
            color: "#3b4a5f",
            fontSize: "1rem",
          }}
          required
        />
      </div>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "#7c90db",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1rem",
            transition: "background-color 0.2s",
          }}
        >
          Update Task
        </button>
        <button
          type="button"
          onClick={onCancel}
          style={{
            backgroundColor: "#e67e8a",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1rem",
            transition: "background-color 0.2s",
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditItemForm;
