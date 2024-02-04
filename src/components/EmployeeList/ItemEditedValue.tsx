import { useDispatch } from "react-redux";
import {
  Employee,
  editedValueTypeEmployee,
} from "../../store/types/CompanyState";
import { useState } from "react";
import { editEmployee } from "../../store/companySlice";

interface EmployeeEditedValueInterface {
  data: Employee;
  type: editedValueTypeEmployee;
}

const EmployeeEditedValue: React.FC<EmployeeEditedValueInterface> = ({
  data,
  type,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(data[type]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (type: editedValueTypeEmployee) => {
    setIsEditing(false);
    dispatch(
      editEmployee({
        companyId: data.companyId,
        editedValue,
        type,
        EmployeeId: data.id,
      })
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(event.target.value);
  };
  return (
    <td onClick={handleDoubleClick}>
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editedValue}
          onChange={handleChange}
          onBlur={() => handleBlur(type)}
        />
      ) : (
        <span className="company-name">{data[type]}</span>
      )}
    </td>
  );
};

export default EmployeeEditedValue;
