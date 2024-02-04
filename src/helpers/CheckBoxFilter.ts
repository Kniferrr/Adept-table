import { Company, Employee } from "../store/types/CompanyState";

export const CheckboxFilter = (mass: Company[] | Employee[], count: number) =>
  mass.filter((c) => c.isSelected === false).length === count;
