export enum EmployeeTopics {
  LIST_EMPLOYEE = 'employee.list',
  CREATE_EMPLOYEE = 'employee.create',
  FIND_EMPLOYEE = 'employee.findById',
  UPDATE_EMPLOYEE = 'employee.update',
  DELETE_EMPLOYEE = 'employee.delete',
}

export enum StoreTopics {
  LIST_STORE = 'store.list',
  CREATE_STORE = 'store.create',
  FIND_STORE = 'store.findById',
  UPDATE_STORE = 'store.update',
  DELETE_STORE = 'store.delete',
}

export enum ScheduleTopics {
  GET_SCHEDULE = 'schedule.get',
  GET_SHIFT = 'schedule.getShift',
  CREATE_SHIFT = 'schedule.createShift',
  UPDATE_SHIFT = 'schedule.updateShift',
  DELETE_SHIFT = 'schedule.deleteShift',
}

export enum ProductTopics {
  LIST_PRODUCT = 'product.list',
  CREATE_PRODUCT = 'product.create',
  FIND_PRODUCT = 'product.findByIndex',
  UPDATE_PRODUCT = 'product.update',
  DELETE_PRODUCT = 'product.delete',
}