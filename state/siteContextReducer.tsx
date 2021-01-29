import { createSlice } from "@reduxjs/toolkit"
import { SiteContext } from "../interfaces";

const initialState: SiteContext = {
    loading: false
}

const siteContextSlice = createSlice({
    name: "siteContext",
    initialState: initialState,
    reducers: {
        // starts loading
        startLoading: (state) => {
            state.loading = true;
        },
        // stops loading
        stopLoading: (state) => {
            state.loading = false;
        }
    }
});

export const { startLoading, stopLoading } = siteContextSlice.actions;
export default siteContextSlice.reducer;
