export interface CreateStoreDto {
  name: string;
  address: string; 
}

export interface UpdateStoreDto extends Partial<CreateStoreDto> {
  id: string;
}

export interface ListStoreQuery {
  page?: number;
  perPage?: number;
  includeTotal?: boolean;
  sort?: string;
  q?: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}