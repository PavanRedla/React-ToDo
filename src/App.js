import React from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

export default function App() {
  return (
    <>
      <h1> This is ToDO CRUD Example</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <ToDoList />
          </div>
          <div className="col-sm-4">
            <AddToDo />
          </div>
        </div>
      </div>
    </>
  );
}
