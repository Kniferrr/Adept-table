import { createSelector } from "reselect";
import { RootState } from "..";

const companies = (state: RootState) => state.company.companies;

export const selectSelectedCompany = createSelector([companies], (companies) =>
  companies.filter((c) => c.isSelected === true)
);
