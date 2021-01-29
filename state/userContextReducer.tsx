import { createSlice } from "@reduxjs/toolkit"
import { mockUserContext } from "./mockData/userContext";
import { emptyUser } from "./mockData/users";
import { UserContext } from "../interfaces";

const initialState: UserContext = {
    authenticated: false,
    userId: "0",
    userName: "",
    token: "",
    user: emptyUser,
    refreshToken: ""
}

const userContextSlice = createSlice({
    name: "userContext",
    initialState: process.env.USE_MOCK_DATA === "true" ? mockUserContext : initialState,
    reducers: {
        // retrieves user information
        getContext: (state, action) => {
            // TODO get user context from API
            console.log(state, action);
        },
        // refreshes the user's token
        refreshToken: (state, action) => {
            console.log(state, action);
        }
    }
});

export const { getContext, refreshToken } = userContextSlice.actions;
export default userContextSlice.reducer;
