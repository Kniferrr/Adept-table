import { Company } from "../store/companySlice";
import { Employee } from "../store/employeeSlice";

export const CheckboxFilter = (mass: Company[] | Employee[], count: number) =>
  mass.filter((c) => c.isSelected === false).length === count;
