import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  removeCompanies,
  selectCompany,
  toggleSelectAllCompanies,
} from "../store/companySlice";
import { CheckboxFilter } from "../helpers/CheckBoxFilter";
import ButtonsCompany from "./ButtonsCompany";

const CompanyList: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state: RootState) => state.company.companies);

  const handleCompanyClick = (companyId: number) => {
    dispatch(selectCompany(companyId));
  };

  const handleSelectAllCompanies = () => {
    dispatch(toggleSelectAllCompanies());
  };

  const handleRemoveCompany = (companyId: number) => {
    dispatch(removeCompanies([companyId]));
  };

  return (
    <div className="company-list">
      <ButtonsCompany />
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={CheckboxFilter(companies, 0)}
                onChange={handleSelectAllCompanies}
              />
            </th>
            <th>Название компании</th>
            <th>Кол-во сотрудников</th>
            <th>Адрес</th>
            <th>Удалить компанию</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr
              key={company.id}
              className={company.isSelected ? "selected-row" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={company.isSelected}
                  readOnly
                  onClick={() => handleCompanyClick(company.id)}
                />
              </td>
              <td>{company.name}</td>
              <td>{company.employeeCount}</td>
              <td>{company.address}</td>
              <td>
                <button onClick={() => handleRemoveCompany(company.id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
