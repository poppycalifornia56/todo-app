import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f0f0f0",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>To-Do App</h1>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            padding: "0.5rem",
            borderRadius: "4px",
            backgroundColor: "#e0e0e0",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "black",
            padding: "0.5rem",
            borderRadius: "4px",
            backgroundColor: "#e0e0e0",
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
