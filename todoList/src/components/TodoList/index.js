import TodoList from "./TodoList"

const TodoListMainPage = ({ todos, setTodos, todosName, setTodosName, id, setId, addTodos }) => {
    return (
        <>
            <TodoList
                addTodos={addTodos}
                todos={todos}
                setTodos={setTodos}
                todosName={todosName}
                setTodosName={setTodosName}
                id={id}
                setId={setId}
            />
        </>
    )
}

export default TodoListMainPage