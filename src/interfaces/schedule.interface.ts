export interface CreateShiftDto {
  date: Date;
  employeeId: string;
  storeId: string;
}

export interface UpdateShiftDto extends Partial<CreateShiftDto> {
  id: string;
}

export interface GetScheduleQuery {
  from: Date;
  to: Date;
  storeId?: string;
  employeeId?: string;
}