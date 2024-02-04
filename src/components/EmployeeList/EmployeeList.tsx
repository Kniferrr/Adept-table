import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCompany } from "../../store/selectors/companySliceSelectors";
import { CheckboxFilter } from "../../helpers/CheckBoxFilter";
import {
  removeEmployees,
  selectEmployee,
  toggleSelectAllEmployees,
} from "../../store/companySlice";
import ButtonsEmployee from "./ButtonsEmployee";
import { Employee } from "../../store/types/CompanyState";
import EmployeeItem from "./EmployeeItem";

const EmployeeList: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCompany = useSelector(selectSelectedCompany);

  const employees: Employee[] = selectedCompany.flatMap((c) => c.employee);

  if (selectedCompany.length === 0) {
    return <div className="employee-list"></div>;
  }

  const handleRemoveEmployee = (id: number) => {
    dispatch(removeEmployees([id]));
  };

  const handleSelectAllEmployee = () => {
    dispatch(toggleSelectAllEmployees());
  };

  const handleSelectEmployee = (id: number) => {
    dispatch(selectEmployee(id));
  };

  return (
    <div className="employee-list">
      <ButtonsEmployee />
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={CheckboxFilter(employees, 0)}
                onChange={handleSelectAllEmployee}
              />
            </th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Должность</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <EmployeeItem
              key={e.id}
              e={e}
              handleSelectEmployee={handleSelectEmployee}
              handleRemoveEmployee={handleRemoveEmployee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
