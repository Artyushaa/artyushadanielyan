import { useState } from "react";

const TodoListForm = ({ addHandler }) => {
  const [text, setText] = useState("");

  const foo = () => {
    addHandler(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={foo}>Add</button>
    </div>
  );
};

export default TodoListForm;
