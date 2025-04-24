import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
