import { createSelector } from "reselect";
import { RootState } from "..";

const getEmployees = (state: RootState) => state.employee.employees;

const getCompanyIdsFromProps = (
  _: RootState,
  props: { companyIds: number[] }
) => props.companyIds;

export const selectEmployeesByCompanyIds = createSelector(
  [getEmployees, getCompanyIdsFromProps],
  (employees, companyIds) =>
    employees.filter((employee) => companyIds.includes(employee.companyId))
);
