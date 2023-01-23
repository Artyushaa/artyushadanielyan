const TodoItem = ({ todos, deleteHandler, checkHandler }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <div key={todo.id} className="todoItem__container">
            <div className={todo.completed ? "todoItem--line" : ""}>
              {index + 1}.{todo.text}
            </div>
            <div>{todo.date}</div>
            <button
              onClick={() => {
                deleteHandler(todo.id);
              }}
            >
              Delete
            </button>
            <input
              type="checkbox"
              onChange={() => {
                checkHandler(todo.id);
              }}
              checked={todo.completed}
            />
          </div>
        );
      })}
    </>
  );
};

export default TodoItem;
