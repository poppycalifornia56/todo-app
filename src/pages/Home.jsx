import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Welcome to the To-Do App!</h2>
      <TodoList />
    </div>
  );
}

export default Home;
