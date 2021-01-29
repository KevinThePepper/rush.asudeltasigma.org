import { createSlice } from "@reduxjs/toolkit"

import { User } from "../interfaces";
import { mockUserManagement } from "./mockData/users";

type initialStateType = {
    users: User[]
}

const initialState: initialStateType = {
    users: process.env.USE_MOCK_DATA === "true" ? [] : mockUserManagement
}

const userManagementSlice = createSlice({
    name: "userContext",
    initialState: initialState,
    reducers: {
        tempReducer: (state, action) => {
            console.log(state, action);
        }
    }
});

export const { tempReducer } = userManagementSlice.actions;
export default userManagementSlice.reducer;
