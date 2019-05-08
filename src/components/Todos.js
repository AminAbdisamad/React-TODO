import React from "react";
import TodoItem from "./TodoItem";

const Todo = ({ todo, markCompleted, taskDeleted }) => {
  //   const [todo, setTodo] = useState()

  return todo.map(todo => {
    return (
      <TodoItem
        key={todo.Id}
        todo={todo}
        markCompleted={markCompleted}
        taskDeleted={taskDeleted}
      />
    );
  });
};

export default Todo;
