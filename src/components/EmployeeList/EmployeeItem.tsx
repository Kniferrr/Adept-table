import { Employee } from "../../store/types/CompanyState";
import EmployeeEditedValue from "./ItemEditedValue";

interface CompanyItemInterface {
  e: Employee;
  handleSelectEmployee: (companyId: number) => void;
  handleRemoveEmployee: (companyId: number) => void;
}

const EmployeeItem: React.FC<CompanyItemInterface> = ({
  e,
  handleSelectEmployee,
  handleRemoveEmployee,
}) => {
  return (
    <tr className={e.isSelected ? "selected-row" : ""}>
      <td>
        <input
          type="checkbox"
          checked={e.isSelected}
          onChange={() => handleSelectEmployee(e.id)}
        />
      </td>
      <EmployeeEditedValue data={e} type={"lastName"} />
      <EmployeeEditedValue data={e} type={"firstName"} />
      <EmployeeEditedValue data={e} type={"position"} />
      <td>
        <button onClick={() => handleRemoveEmployee(e.id)}>Удалить</button>
      </td>
    </tr>
  );
};

export default EmployeeItem;
