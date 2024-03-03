import { createStore } from "redux";
import rootReducer from "../reducers/reducers";
let mystore = createStore(rootReducer); 
// createStore is striked out as it is outdated we have a better version of it called configure store.
// to create a store we need reducer and we are importing reducer from reducer.js file
export default mystore;
