import {configureStore} from "@reduxjs/toolkit"
import SliceTodos from "./Slice/SliceTodos"

export const store = configureStore({
    reducer: {
        todos:SliceTodos
    }
})

export default store;