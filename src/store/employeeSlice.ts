import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employeesList } from "./mocData/employeesList";

export interface Employee {
  isSelected: boolean;
  id: number;
  companyId: number;
  lastName: string;
  firstName: string;
  position: string;
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: employeesList,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    removeEmployees: (state, action: PayloadAction<number[]>) => {
      state.employees = state.employees.filter(
        (employee) => !action.payload.includes(employee.id)
      );
    },
  },
});

export const { addEmployee, removeEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
