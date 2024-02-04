import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./companySlice";
import employeeReducer from "./employeeSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
    employee: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
