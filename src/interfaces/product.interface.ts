export interface Product {
  index: number,
  model: string;
  imei: string;
  supplier: string;
  sale_date: string | null;
  store: string;
  purchase_price: number;
  sale_price: number | null;
  salary: number | null;
  expense: number | null;
  profit: number | null;
  calculation: boolean | null;
}

export interface CreateProductDto {
  model: string;
  imei: string;
  supplier: string;
  storeId: string;
  purchase_price: number;
  sale_price: number;
  salary: number;
  expense: number;
  calculation: number;
  result: number;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {
  id: string;
  sale_date?: string;
  sale_price?: number;
  salary?: number;
  profit?: number;
  calculation?: number;
}