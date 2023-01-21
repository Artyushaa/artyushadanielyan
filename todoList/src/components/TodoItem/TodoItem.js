import '../../TodoListStyle.css';

const TodoItem = ({ todos, setTodos, todosName, setTodosName, id, setId, addTodos }) => {

    function deleteTodoItem(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <>
            <form className="todoList__typing-field-container">
                <input value={todosName || ''} type="text" onChange={(e) => {
                    setTodosName(e.target.value)
                }} />
                <button onClick={(e) => {
                    e.preventDefault();
                    addTodos()
                }}>Add</button>
            </form>
            {
                todos?.map((todo, index) => {
                    return <div key={todo.id} className="todoList__item">
                        <p className={id === todo.id ? "todoList--hyphen" : ''}>{index + 1}.{todo.name}</p>
                        <p>{todo.date}</p>
                        <div className="todoList__item-btn-container">
                            <button className="todoList__item-btn" onClick={() => {
                                let todoId = deleteTodoItem(todo.id)
                                return todoId
                            }}>Delete</button>
                            <button className="todoList__item-btn">Edit</button>
                            <input type="checkbox" onClick={() => {
                                setId(todo.id)
                            }} />
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default TodoItem