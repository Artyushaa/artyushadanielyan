import TodoItem from "../TodoItem/TodoItem"
import TodoListForm from "../TodoListForm"

const TodoList = ({ addHandler, todos, deleteHandler, checkHandler }) => {
    return (
        <>
            <TodoListForm
                addHandler={addHandler}
            />
            <TodoItem
                todos={todos}
                deleteHandler={deleteHandler}
                checkHandler={checkHandler}
            />
        </>
    )
}

export default TodoList