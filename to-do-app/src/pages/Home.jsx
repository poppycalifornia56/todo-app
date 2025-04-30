import TodoList from "../components/TodoList";

function Home({ tasks, setTasks }) {
  return <TodoList tasks={tasks} setTasks={setTasks} />;
}

export default Home;
