import { useState } from "react"

const TodoListForm = ({ addHandler }) => {

    const [text, setText] = useState('')

    return (
        <>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value)
            }} />
            <button onClick={() => {
                addHandler(text)
                setText('')
            }}>Add</button>
        </>
    )
}

export default TodoListForm
