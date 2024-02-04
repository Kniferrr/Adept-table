import React, { useState } from "react";
import { addEmployee, removeEmployees } from "../store/employeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCompany } from "../store/selectors/companySliceSelectors";
import { selectEmployeesByCompanyIds } from "../store/selectors/employeeSliceSelectors";
import { RootState } from "../store";

const EmployeeList: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCompany = useSelector(selectSelectedCompany);

  const employees = useSelector((state: RootState) =>
    selectEmployeesByCompanyIds(state, {
      companyIds: selectedCompany.map((sc) => sc.id),
    })
  );

  const [newEmployee, setNewEmployee] = useState({
    lastName: "",
    firstName: "",
    position: "",
  });

  const handleAddEmployee = () => {
    if (
      newEmployee.lastName &&
      newEmployee.firstName &&
      newEmployee.position &&
      selectedCompany
    ) {
      dispatch(
        addEmployee({
          id: Date.now(),
          companyId: 1,
          ...newEmployee,
          isSelected: false,
        })
      );
      setNewEmployee({ lastName: "", firstName: "", position: "" });
    }
  };

  const handleRemoveEmployees = () => {
    const selectedEmployeeIds = employees
      .filter((employee) => employee.isSelected)
      .map((employee) => employee.id);
    dispatch(removeEmployees(selectedEmployeeIds));
  };

  if (employees.length === 0) {
    return <div className="employee-list"></div>;
  }

  return (
    <>
      <button className="addButton" onClick={handleAddEmployee}>
        Добавить сотрудника
      </button>
      <button className="addButton" onClick={handleRemoveEmployees}>
        Удалить выделенных сотрудников
      </button>
    </>
  );
};

export default EmployeeList;
