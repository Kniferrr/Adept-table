import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedCompany } from "../store/selectors/companySliceSelectors";
import { CheckboxFilter } from "../helpers/CheckBoxFilter";
import { selectEmployeesByCompanyIds } from "../store/selectors/employeeSliceSelectors";
import { RootState } from "../store";

const EmployeeList: React.FC = () => {
  const selectedCompany = useSelector(selectSelectedCompany);

  const employees = useSelector((state: RootState) =>
    selectEmployeesByCompanyIds(state, {
      companyIds: selectedCompany.map((sc) => sc.id),
    })
  );

  if (employees.length === 0) {
    return <div className="employee-list"></div>;
  }

  return (
    <div className="employee-list">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" checked={CheckboxFilter(employees, 0)} />
            </th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Должность</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className={employee.isSelected ? "selected-row" : ""}
            >
              <td>
                <input type="checkbox" />
              </td>
              <td>{employee.lastName}</td>
              <td>{employee.firstName}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
