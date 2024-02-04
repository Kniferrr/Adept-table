import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany, removeCompanies } from "../store/companySlice";
import { RootState } from "../store";
import { defaultCompany } from "../store/mocData/CompanyState";

const ButtonsCompany: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state: RootState) => state.company.companies);

  const [isFormVisible, setFormVisible] = useState(false);
  const [newCompany, setNewCompany] = useState(defaultCompany);

  const handleToggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewCompany({
      ...newCompany,
      [name]: value,
    });
  };

  const handleAddCompany = () => {
    dispatch(addCompany(newCompany));
    setNewCompany(defaultCompany);
    setFormVisible(false);
  };

  const handleRemoveEmployees = () => {
    const ids = companies.filter((c) => c.isSelected).map((c) => c.id);
    dispatch(removeCompanies(ids));
  };
  return (
    <>
      <button className="addButton" onClick={handleToggleForm}>
        {isFormVisible ? "Отменить" : "Добавить компанию"}
      </button>
      {isFormVisible && (
        <form>
          <div>
            <label>
              Название компании:
              <input
                type="text"
                name="name"
                value={newCompany.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div></div>
          <div>
            <label>
              Адрес компании:
              <input
                type="text"
                name="address"
                value={newCompany.address}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="button" onClick={handleAddCompany}>
            Добавить
          </button>
        </form>
      )}
      <button className="addButton" onClick={handleRemoveEmployees}>
        Удалить выделенные компании
      </button>
    </>
  );
};

export default ButtonsCompany;
