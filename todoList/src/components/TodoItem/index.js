import TodoItem from "./TodoItem"

const TodoItemMainPage = ({ todos, setTodos, todosName, setTodosName, id, setId, addTodos }) => {
    return (
        <>
            <TodoItem
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

export default TodoItemMainPage