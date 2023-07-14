export interface IDeptSchema {
  companyId: string;
  deptName: string;
  jobs: Array<string>; //jobids
}

export interface IDept extends IDeptSchema {
  _id: string;
}
