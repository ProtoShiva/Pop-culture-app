import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slices/userSlices"

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default appStore
