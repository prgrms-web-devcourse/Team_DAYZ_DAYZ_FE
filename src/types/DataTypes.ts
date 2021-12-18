export type TimeData = {
  date: string;
  startTime: string;
  closeTime: string;
};

export type InputData = {
  name: string;
  categoryId: number;
  intro: string;
  step1: string;
  step2: string;
  step3: string;
  pickedDate: Date;
  requiredTime: number;
  startTime: string;
  maxPeopleNumber: number;
  price: number;
};

export interface LocationType {
  regionId: number;
  regionName: string;
}
