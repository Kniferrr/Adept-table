import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  removeCompanies,
  selectCompany,
  toggleSelectAllCompanies,
} from "../../store/companySlice";
import { CheckboxFilter } from "../../helpers/CheckBoxFilter";
import ButtonsCompany from "./ButtonsCompany";
import CompanyItem from "./CompanyItem";

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
            <CompanyItem
              key={company.id}
              company={company}
              handleCompanyClick={handleCompanyClick}
              handleRemoveCompany={handleRemoveCompany}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
