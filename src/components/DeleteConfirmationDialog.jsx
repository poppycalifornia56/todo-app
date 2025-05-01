import React from "react";

function DeleteConfirmationDialog({ isOpen, onCancel, onConfirm, taskName }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "2rem",
          maxWidth: "500px",
          width: "90%",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h3
          style={{
            color: "#3b4a5f",
            margin: "0 0 1rem 0",
            fontSize: "1.3rem",
          }}
        >
          Confirm Deletion
        </h3>
        <p
          style={{
            color: "#505c6e",
            marginBottom: "1.5rem",
            fontSize: "1rem",
            lineHeight: "1.5",
          }}
        >
          Are you sure you want to delete the incomplete task:{" "}
          <strong>"{taskName}"</strong>?
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.75rem",
          }}
        >
          <button
            onClick={onCancel}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
              backgroundColor: "#f9fafb",
              color: "#4b5563",
              fontWeight: "500",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#e67e8a",
              color: "white",
              fontWeight: "500",
              fontSize: "0.9rem",
              cursor: "pointer",
            }}
          >
            Delete Anyway
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationDialog;
