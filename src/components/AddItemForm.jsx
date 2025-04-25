import { useState } from "react";

function AddItemForm({ onAddItem }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newItem = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    onAddItem(newItem);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1rem",
        padding: "1rem",
        backgroundColor: "#1a1a1a",
        borderRadius: "8px",
      }}
    >
      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #646cff",
            backgroundColor: "#242424",
            color: "white",
          }}
          required
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #646cff",
            backgroundColor: "#242424",
            color: "white",
            minHeight: "80px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#646cff",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>
    </form>
  );
}

export default AddItemForm;
