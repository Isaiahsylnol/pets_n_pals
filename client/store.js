import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import petReducer from "./slices/pets";
import messageReducer from "./slices/message";
// Holder of Application state
const reducer = {
    pet: petReducer,
    auth: authReducer,
    message: messageReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true
})

export default store;