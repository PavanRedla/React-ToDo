import React from "react";
import { useSelector } from "react-redux";

// to read the data from redux and display it in component we use "useSelector"
export default function ToDoList() {
  const allTodos = useSelector((state) => {
    console.log(state.todosReducer);
    return state.todosReducer; // this indicates that data coming from todosReducer will be collected by allTodods.
  });

  return (
    <>
      <h3>ToDoList</h3>
      <table className="table table-bordered table-striped">
        
      </table>
    </>
  );
}
