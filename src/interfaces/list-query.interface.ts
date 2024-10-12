export interface ListQuery {
  page?: number;
  perPage?: number;
  includeTotal?: boolean;
  sort?: string;
  order?: string;
  q?: string;
}