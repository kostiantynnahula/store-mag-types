export interface CreateEmployeeDto {
  name: string;
  email: string;
  storeId?: string; 
}

export interface UpdateEmployeeDto extends Partial<CreateEmployeeDto> {
  id: string;
}

export interface ListEmployeeQuery {
  page?: number;
  perPage?: number;
  includeTotal?: boolean;
  sort?: string;
  q?: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  storeId: string;
  createdAt: string;
  updatedAt: string;
}