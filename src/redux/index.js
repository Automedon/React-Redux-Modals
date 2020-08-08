import { combineReducers, createStore, applyMiddleware } from "redux";
import ModalAReducer from "./modals/modalA";
import ModalBReducer from "./modals/modalB";
import CheckpointReducer from "./modals/checkpoint";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ModalAReducer,
  ModalBReducer,
  CheckpointReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
