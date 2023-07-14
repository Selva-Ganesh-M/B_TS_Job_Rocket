export enum ECompanyTypes {
  IT = "IT",
  Marketing = "Marketing",
  Analytics = "Analytics",
}

export interface ICompanySchema {
  cName: string;
  location: string;
  type: ECompanyTypes;
  noOfEmployees: number;
  hrs: Array<string>;
  deparments: Array<string>;
  jobs: [string];
}
export interface IWDCompanySchema extends Partial<ICompanySchema> {
  cName: string;
  location: string;
  type: ECompanyTypes;
}

export interface ICompanyLean extends ICompanySchema {
  _id: string;
}
