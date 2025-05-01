import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ItemDetail({ tasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = parseInt(id);
  const task = tasks[index];

  if (!task) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Task Not Found</h2>
        <p>The task you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#7c90db",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "1rem",
          }}
        >
          Back to Tasks
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(124, 144, 219, 0.1)",
      }}
    >
      <h2 style={{ color: "#3b4a5f", marginBottom: "1rem" }}>{task.task}</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: task.completed ? "#e6f7ef" : "#fff2f2",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: task.completed ? "#6bbf8f" : "#e67e8a",
            marginRight: "0.75rem",
          }}
        ></div>
        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            fontWeight: "500",
            color: task.completed ? "#2e7555" : "#b43b47",
          }}
        >
          Status: {task.completed ? "Completed" : "Not Completed"}
        </p>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#7c90db",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        Back to Tasks
      </button>
    </div>
  );
}

export default ItemDetail;
