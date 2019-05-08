import React, { Component } from "react";
import uuid from "uuid";
// import logo from "./logo.svg";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Todo from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todo: [
      {
        Id: uuid.v4(),
        Task: "Send email to my boss",
        Completed: false
      },
      {
        Id: uuid.v4(),
        Task: "Study for Machine Learning",
        Completed: false
      },
      {
        Id: uuid.v4(),
        Task: "Take breakfast",
        Completed: false
      }
    ]
  };
  markCompleted = id => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.Id === id) {
          todo.Completed = !todo.Completed;
        }
        return todo;
      })
    });
  };

  taskDeleted = id => {
    this.setState({
      todo: [
        ...this.state.todo.filter(todo => {
          return todo.Id !== id;
        })
      ]
    });
  };
  //  TODO: Add todo in the list

  addNewTodo = title => {
    const newTodo = {
      Id: uuid.v4(),
      Task: title,
      Completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  render() {
    return (
      <div className="container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <h4>Todo</h4>
        <Todo
          todo={this.state.todo}
          markCompleted={this.markCompleted}
          taskDeleted={this.taskDeleted}
        />
      </div>
    );
  }
}

export default App;
