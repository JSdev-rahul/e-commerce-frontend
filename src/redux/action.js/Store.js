import { createStore } from "redux";
import { rootReducer } from "./reducer/CombineREducer";

export const store = createStore(rootReducer);
