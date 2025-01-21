import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "../redux-toolkit/slice";

const store = configureStore({
    reducer: {
        koinX: reduxSlice,
    },
});

export default store;
