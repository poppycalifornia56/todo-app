import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        backgroundColor: "#f0f0f0",
        padding: "1rem",
        width: "200px",
        height: "100vh",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "0.5rem",
              borderRadius: "4px",
              backgroundColor: "#e0e0e0",
              display: "block",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "black",
              padding: "0.5rem",
              borderRadius: "4px",
              backgroundColor: "#e0e0e0",
              display: "block",
            }}
          >
            About
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
