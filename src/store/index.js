import { createStore, combineReducers } from "redux";
import fruitsReducer from "./modules/fruits/reducer";


const reducers = combineReducers({ fruits: fruitsReducer });

const store = createStore(reducers);

export default store;