import './TodoListStyle.css';
import TodoList from './components/TodoList/';
import { useState } from 'react';
import UtilsImport from './utils';
import { nanoid } from 'nanoid';

function App() {

  const [todos, setTodos] = useState([]);
  const [todosName, setTodosName] = useState();
  const [id, setId] = useState()

  const addTodos = () => {
    if (todosName) {
      setTodos([
        ...todos,
        {
          name: todosName,
          id: nanoid(),
          date: <UtilsImport />
        },
      ]
      )
    }
    setTodosName('')
  }

  return (
    <>
      <div className='todoList__container'>
        <TodoList
          addTodos={addTodos}
          todos={todos}
          setTodos={setTodos}
          todosName={todosName}
          setTodosName={setTodosName}
          id={id}
          setId={setId}
        />
      </div>
    </>
  );
}

export default App;
