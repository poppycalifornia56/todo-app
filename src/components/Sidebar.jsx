import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={{ backgroundColor: '#ddd', padding: '1rem', width: '200px' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
