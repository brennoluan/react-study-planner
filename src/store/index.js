import {configureStore} from '@reduxjs/toolkit'
import taskReducer from "./slices/taskSlice.js";

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    },
})
console.log(store.getState())