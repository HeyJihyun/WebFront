import TodoTemplate from "./TodoTemplate";
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {
  return (
    <TodoTemplate>
      <TodoInput />
      <TodoList></TodoList>
    </TodoTemplate>
  );
}

export default App;
