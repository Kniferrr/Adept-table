import React from "react";
import { Company, Employee } from "../../store/types/CompanyState";

interface EmployeeFormInterface {
  isFormVisible: boolean;
  newValue: Employee;
  companies: Company[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleCompanyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleAddCompany: () => void;
}

const EmployeeForm: React.FC<EmployeeFormInterface> = ({
  isFormVisible,
  newValue,
  companies,
  handleInputChange,
  handleCompanyChange,
  handleAddCompany,
}) => {
  return (
    <>
      {isFormVisible && (
        <div className="add-form">
          <form>
            <div>
              <label>
                Имя Сотрудника:
                <input
                  type="text"
                  name="firstName"
                  value={newValue.firstName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Фамилия Сотрудника:
                <input
                  type="text"
                  name="lastName"
                  value={newValue.lastName}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div></div>
            <div>
              <label>
                Адрес Сотрудника:
                <input
                  type="text"
                  name="position"
                  value={newValue.position}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Компания:
                <select
                  name="companyId"
                  value={newValue.companyId}
                  onChange={handleCompanyChange}
                >
                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button type="button" onClick={handleAddCompany}>
              Добавить
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EmployeeForm;
