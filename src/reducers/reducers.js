import { combineReducers } from "redux";

const initialState = [
  { id: 1, text: "aaaaa", completed: false },
  { id: 2, text: "bbbbb", completed: true },
];

// Reducer is a function which takes two arguments
// 1. state object - it changes the state variable.
// 2. action object - it is an object which returns an object when we pass id or text to it.

// and based on the action type reducer modifies the state variable and returns the udpated state  variable.

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

// we can add ten's of reducers in one redux application. for example we have created one more reducer called reducer2 and it's just returning state.

function reducer2(state = [], action) {
  return state;
}

// combineReducers is the one which combines all the reducers and gives you one reducer called rootReducer and using this rootReducer we are creating the store.

const rootReducer = combineReducers({
  todosReducer,
  reducer2,
});
export default rootReducer;
