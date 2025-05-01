import React, { useState } from "react";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

function ListItem({
  item,
  index,
  onDelete,
  onEdit,
  onToggleComplete,
  onViewDetails,
}) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onToggleComplete(index);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit(index);
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!item.completed) {
      setShowDeleteConfirmation(true);
    } else {
      onDelete(index);
    }
  };

  const handleConfirmDelete = () => {
    setShowDeleteConfirmation(false);
    onDelete(index);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleItemClick = () => {
    onViewDetails(index);
  };

  return (
    <>
      <div
        onClick={handleItemClick}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "1rem",
          boxShadow: "0 2px 4px rgba(124, 144, 219, 0.1)",
          borderLeft: "4px solid #7c90db",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flex: 1,
          }}
        >
          <input
            type="checkbox"
            checked={item.completed}
            onClick={handleCheckboxClick}
            style={{
              cursor: "pointer",
              width: "20px",
              height: "20px",
              accentColor: "#7c90db",
            }}
          />
          <div style={{ flex: 1 }}>
            <h3
              style={{
                margin: 0,
                color: "#3b4a5f",
                textDecoration: item.completed ? "line-through" : "none",
                fontWeight: "500",
                opacity: item.completed ? 0.7 : 1,
              }}
            >
              {item.task}
            </h3>
          </div>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            onClick={handleEdit}
            style={{
              backgroundColor: "#7c90db",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "0.9rem",
              transition: "background-color 0.2s",
            }}
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            style={{
              backgroundColor: "#e67e8a",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "0.9rem",
              transition: "background-color 0.2s",
            }}
          >
            Delete
          </button>
        </div>
      </div>

      <DeleteConfirmationDialog
        isOpen={showDeleteConfirmation}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        taskName={item.task}
      />
    </>
  );
}

export default ListItem;
