function ListItem({ item, index, onDelete, onEdit, onToggleComplete }) {
  return (
    <div
      style={{
        padding: "1.25rem",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(124, 144, 219, 0.1)",
        borderLeft: "4px solid #7c90db",
        transition: "transform 0.2s, box-shadow 0.2s",
        marginBottom: "0.75rem",
        ":hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 4px 8px rgba(124, 144, 219, 0.15)",
        },
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}
      >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={onToggleComplete}
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
            {item.title}
          </h3>
          {item.description && (
            <p
              style={{
                margin: "0.25rem 0 0",
                fontSize: "0.95rem",
                color: "#64748b",
                opacity: item.completed ? 0.6 : 0.9,
              }}
            >
              {item.description}
            </p>
          )}
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            onEdit();
          }}
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
            ":hover": {
              backgroundColor: "#6a7fc8",
            },
          }}
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDelete(index);
          }}
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
            ":hover": {
              backgroundColor: "#d46b79",
            },
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
