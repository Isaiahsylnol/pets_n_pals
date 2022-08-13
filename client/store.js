import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import messageReducer from './slices/message';
// Holder of Application state
const reducer = {
    auth: authReducer,
    message: messageReducer
}

const store = configureStore({
    reducer: reducer,
    devTools: true
})

export default store;