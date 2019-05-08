import React from "react";

function TodoItem({ todo, markCompleted, taskDeleted }) {
  const completedStyle = () => {
    return {
      background: "#fff",
      borderBottom: "1px dotted #000",
      textDecoration: todo.Completed ? "line-through" : "none"
    };
  };
  return (
    <div>
      <p>
        <label>
          <input type="checkbox" onChange={markCompleted.bind(null, todo.Id)} />
          <span style={completedStyle()}>{todo.Task}</span>
        </label>

        <button style={ButtonStyle} onClick={taskDeleted.bind(null, todo.Id)}>
          X
        </button>
      </p>
    </div>
  );
}
const ButtonStyle = {
  marginBottom: "15px",
  background: "#ff0000",
  color: "#fff",
  float: "right"
};

export default TodoItem;
