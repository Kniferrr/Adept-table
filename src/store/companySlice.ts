import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Company {
  address: string;
  employeeCount: number;
  isSelected: boolean;
  id: number;
  name: string;
}

export interface CompanyState {
  companies: Company[];
}

const initialState: CompanyState = {
  companies: [
    {
      id: 1,
      name: "Company 1",
      employeeCount: 2,
      address: "Address 1",
      isSelected: false,
    },
    {
      id: 2,
      name: "Company 2",
      employeeCount: 3,
      address: "Address 2",
      isSelected: false,
    },
    {
      id: 3,
      name: "Company 3",
      employeeCount: 2,
      address: "Address 3",
      isSelected: false,
    },
  ],
};

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
  },
});

export const {
  selectCompany,
  toggleSelectAllCompanies,
  addCompany,
  removeCompanies,
} = companySlice.actions;

export default companySlice.reducer;
