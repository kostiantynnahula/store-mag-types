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