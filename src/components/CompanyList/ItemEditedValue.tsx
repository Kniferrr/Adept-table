import { useDispatch } from "react-redux";
import {
  Company,
  editedValueTypeCompany,
} from "../../store/types/CompanyState";
import { useState } from "react";
import { editCompany } from "../../store/companySlice";

interface CompanyEditedValueInterface {
  data: Company;
  type: editedValueTypeCompany;
}

const CompanyEditedValue: React.FC<CompanyEditedValueInterface> = ({
  data,
  type,
}) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(data[type]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (type: editedValueTypeCompany) => {
    setIsEditing(false);
    dispatch(editCompany({ companyId: data.id, editedValue, type }));
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

export default CompanyEditedValue;
