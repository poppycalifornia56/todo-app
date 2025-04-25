function ListItem({ item, index, onDelete, onEdit, onToggleComplete }) {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#1a1a1a",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={onToggleComplete}
          style={{ cursor: "pointer" }}
        />
        <div>
          <h3
            style={{
              margin: 0,
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.title}
          </h3>
          <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
            {item.description}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            onEdit();
          }}
          style={{
            backgroundColor: "#646cff",
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
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
            backgroundColor: "#ff5555",
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
