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