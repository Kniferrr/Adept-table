import { Company } from "../../store/types/CompanyState";

interface CompanyFormInterface {
  isFormVisible: boolean;
  newCompany: Company;

  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleAddCompany: () => void;
}
const CompanyForm: React.FC<CompanyFormInterface> = ({
  isFormVisible,
  newCompany,
  handleInputChange,
  handleAddCompany,
}) => {
  return (
    <>
      {isFormVisible && (
        <div className="add-form">
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
        </div>
      )}
    </>
  );
};

export default CompanyForm;
