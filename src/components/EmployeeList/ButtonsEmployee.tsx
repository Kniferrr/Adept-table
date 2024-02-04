import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { defaultEmployee } from "../../store/mocData/CompanyState";
import { addEmployee, removeEmployees } from "../../store/companySlice";
import EmployeeForm from "./EmployeeForm";

const ButtonsEmployee: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state: RootState) => state.company.companies);

  const [isFormVisible, setFormVisible] = useState(false);
  const [newValue, setNewValue] = useState(defaultEmployee);

  const handleToggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewValue({
      ...newValue,
      [name]: value,
    });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const companyId = Number(e.target.value);
    setNewValue({
      ...newValue,
      companyId,
    });
  };

  const handleAddCompany = () => {
    dispatch(addEmployee(newValue));
    setNewValue(defaultEmployee);
    setFormVisible(false);
  };

  const handleRemoveEmployees = () => {
    const ids: number[] = companies.flatMap((c) =>
      c.employee.filter((e) => e.isSelected).map((e) => e.id)
    );
    dispatch(removeEmployees(ids));
  };

  return (
    <>
      <EmployeeForm
        isFormVisible={isFormVisible}
        newValue={newValue}
        companies={companies}
        handleInputChange={(e) => handleInputChange(e)}
        handleCompanyChange={(e) => handleCompanyChange(e)}
        handleAddCompany={handleAddCompany}
      />
      <button className="addButton" onClick={handleToggleForm}>
        {isFormVisible ? "Отменить" : "Добавить сотрудника"}
      </button>
      <button className="addButton" onClick={handleRemoveEmployees}>
        Удалить выделенных сотрудников
      </button>
    </>
  );
};

export default ButtonsEmployee;
