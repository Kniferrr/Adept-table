export interface Employee {
  isSelected: boolean;
  id: number;
  companyId: number;
  lastName: string;
  firstName: string;
  position: string;
}

export interface Company {
  address: string;
  isSelected: boolean;
  id: number;
  name: string;
  employee: Employee[];
}

export interface CompanyState {
  companies: Company[];
}

export type editedValueTypeCompany = "name" | "address";
export type editedValueTypeEmployee = "lastName" | "firstName" | "position";
