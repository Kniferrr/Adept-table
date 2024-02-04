import { Company } from "../../store/types/CompanyState";
import CompanyEditedValue from "./ItemEditedValue";

interface CompanyItemInterface {
  company: Company;
  handleCompanyClick: (companyId: number) => void;
  handleRemoveCompany: (companyId: number) => void;
}

const CompanyItem: React.FC<CompanyItemInterface> = ({
  company,
  handleCompanyClick,
  handleRemoveCompany,
}) => {
  return (
    <>
      <tr className={company.isSelected ? "selected-row" : ""}>
        <td>
          <input
            type="checkbox"
            checked={company.isSelected}
            readOnly
            onClick={() => handleCompanyClick(company.id)}
          />
        </td>
        <CompanyEditedValue type={"name"} data={company} />

        <td>{company.employee.length}</td>
        <CompanyEditedValue type={"name"} data={company} />
        <td>
          <button
            className="addButton"
            onClick={() => handleRemoveCompany(company.id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default CompanyItem;
