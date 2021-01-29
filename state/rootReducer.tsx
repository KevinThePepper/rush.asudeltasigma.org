import { configureStore } from "@reduxjs/toolkit";
import siteContextReducer from "./siteContextReducer";
import userContextReducer from "./userContextReducer";
import userManaegmentReducer from "./userManagementReducer";

const store = configureStore({
    reducer: {
        siteContext: siteContextReducer,
        userContext: userContextReducer,
        userManagement: userManaegmentReducer
    },
    devTools: process.env.NODE_ENV === "development"
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
