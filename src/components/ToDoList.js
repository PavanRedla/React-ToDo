import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../actions/actions";

// to read the data from redux and display it in component we use "useSelector"
export default function ToDoList() {
  const dispatch = useDispatch();

  const allTodos = useSelector((state) => {
    // console.log(state.todosReducer);
    return state.todosReducer; // this indicates that data coming from todosReducer will be collected by allTodods.
  });

  const deleteMyTodo = (id) => {
    const actionObj = deleteTodo(id);
    dispatch(actionObj);
    // dispacth is used to connect with reducer
  };

  return (
    <>
      <h3>ToDoList</h3>
      <table className="table table-bordered table-striped">
        {allTodos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td>{todo.completed.toString()}</td>
              <td>
                <button
                  className="btn btn-danger mb-2"
                  onClick={() => deleteMyTodo(todo.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
