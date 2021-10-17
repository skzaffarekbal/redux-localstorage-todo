import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./actions";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2 className="text-center my-3">⏳Stay Productive With Todo✌️</h2>
      <AddTodo />
      <TodoList />
      <div className="d-grid gap-2 col-6 mx-auto my-3">
        <button className="btn btn-danger" type="button" onClick={() => dispatch(removeTodo())}>Remove All <i className="fa fa-trash-alt"></i></button>
      </div>
    </div>
  );
}

export default App;
