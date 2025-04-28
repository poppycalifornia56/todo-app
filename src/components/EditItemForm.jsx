import React, { useState, useEffect } from "react";

function EditItemForm({ item, onUpdateItem, onCancel }) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  useEffect(() => {
    setTitle(item.title);
    setDescription(item.description);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const updatedItem = {
      ...item,
      title,
      description,
    };

    onUpdateItem(updatedItem);
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
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
      <div style={{ marginBottom: "1.5rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "#3b4a5f",
            fontWeight: "500",
          }}
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #e0e6ed",
            backgroundColor: "#f8fafc",
            color: "#3b4a5f",
            minHeight: "100px",
            fontSize: "1rem",
          }}
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
