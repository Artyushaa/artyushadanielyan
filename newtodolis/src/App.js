import "./App.css";
import TodoList from "./components/componentTodo/TodoList";
import { useState, useCallback } from "react";
import { nanoid } from "nanoid";
import { getData } from "./utils";

function App() {
  const [todos, setTodos] = useState([]);

  const addHandler = useCallback((text) => {
    if (text) {
      const newTodos = {
        text,
        id: nanoid(),
        date: getData(),
        completed: false,
      };
      setTodos((prev) => [...prev, newTodos]);
    }
  }, []);

  const deleteHandler = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const checkHandler = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) => ({
        ...item,
        completed: item.id === id ? !item.completed : item.completed,
      })),
    );
  }, []);

  return (
    <>
      <TodoList
        addHandler={addHandler}
        todos={todos}
        deleteHandler={deleteHandler}
        checkHandler={checkHandler}
      />
    </>
  );
}

export default App;
