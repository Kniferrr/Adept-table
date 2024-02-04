import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./mocData/CompanyState";
import {
  Company,
  editedValueTypeCompany,
  editedValueTypeEmployee,
  Employee,
} from "./types/CompanyState";

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    selectCompany: (state, action: PayloadAction<number>) => {
      const companyId = state.companies.findIndex(
        (c) => c.id === action.payload
      );
      if (companyId !== -1) {
        state.companies[companyId].isSelected =
          !state.companies[companyId].isSelected;
      }
    },
    toggleSelectAllCompanies: (state) => {
      const allSelected = state.companies.every(
        (company) => company.isSelected
      );
      state.companies.forEach((company) => {
        company.isSelected = !allSelected;
      });
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies = [...state.companies, action.payload];
    },
    removeCompanies: (state, action: PayloadAction<number[]>) => {
      state.companies = state.companies.filter(
        (company) => !action.payload.includes(company.id)
      );
    },
    addEmployee: (state, action: PayloadAction<Employee>) => {
      const companyId = state.companies.findIndex(
        (c) => c.id === action.payload.companyId
      );
      state.companies[companyId].employee.push(action.payload);
    },
    removeEmployees: (state, action: PayloadAction<number[]>) => {
      state.companies = state.companies.map((company) => ({
        ...company,
        employee: company.employee.filter(
          (e) => !action.payload.includes(e.id)
        ),
      }));
    },
    toggleSelectAllEmployees: (state) => {
      const selectedCompanies = state.companies.filter(
        (company) => company.isSelected
      );
      const allSelected = selectedCompanies.every((company) =>
        company.employee.every((employee) => employee.isSelected)
      );

      selectedCompanies.forEach((company) => {
        company.employee.forEach((employee) => {
          employee.isSelected = !allSelected;
        });
      });
    },
    selectEmployee: (state, action: PayloadAction<number>) => {
      state.companies.forEach((company) => {
        company.employee.forEach((employee) => {
          if (employee.id === action.payload) {
            employee.isSelected = !employee.isSelected;
          }
        });
      });
    },
    editCompany: (
      state,
      action: PayloadAction<{
        companyId: number;
        editedValue: string;
        type: editedValueTypeCompany;
      }>
    ) => {
      const { companyId, editedValue, type } = action.payload;
      const companyIndex = state.companies.findIndex((c) => c.id === companyId);

      state.companies[companyIndex][type] = editedValue;
    },
    editEmployee: (
      state,
      action: PayloadAction<{
        companyId: number;
        EmployeeId: number;
        editedValue: string;
        type: editedValueTypeEmployee;
      }>
    ) => {
      const { companyId, editedValue, type, EmployeeId } = action.payload;
      const companyIndex = state.companies.findIndex((c) => c.id === companyId);
      const employeeIndex = state.companies[companyIndex].employee.findIndex(
        (e) => e.id === EmployeeId
      );
      state.companies[companyIndex].employee[employeeIndex][type] = editedValue;
    },
  },
});

export const {
  selectCompany,
  toggleSelectAllCompanies,
  addCompany,
  removeCompanies,
  addEmployee,
  removeEmployees,
  toggleSelectAllEmployees,
  selectEmployee,
  editCompany,
  editEmployee,
} = companySlice.actions;

export default companySlice.reducer;
