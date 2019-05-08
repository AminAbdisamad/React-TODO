import React, { useState } from "react";

function AddTodo({ addNewTodo }) {
  const [addTodo, setAddTodo] = useState({ title: "" });
  const onChange = e => {
    console.log(e.target.value);
    setAddTodo({ title: e.target.value });
  };
  const todoSubmit = e => {
    e.preventDefault();
    addNewTodo(addTodo.title);
    setAddTodo({ title: "" });
  };
  return (
    <div>
      <form onSubmit={todoSubmit}>
        <input name="add" value={addTodo.title} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddTodo;
