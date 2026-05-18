import {configureStore} from '@reduxjs/toolkit'
import taskReducer from "./slices/taskSlice.js";
import themeReducer from "./slices/themeSlice.js";
import analyticReducer from "./slices/analyticSlice.js";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        theme: themeReducer,
        analytics: analyticReducer
    },
})