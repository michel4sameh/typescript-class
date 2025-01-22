import { AbstractControl, FormControl } from '@angular/forms';

export type Vehicle = {
  vin: string;
  make: string;
  model: string;
  year: number;
};

export type VehicleCreateModel = Omit<Vehicle, 'id'>;

// export type VehicleFormThing = {
//   make: AbstractControl<string>;
//   model: AbstractControl<string>;
//   year: AbstractControl<number>;
//};

export type FormModel<T> = {
  [Property in keyof T]: FormControl<T[Property]>;
};
export type VehicleFormThing = FormModel<VehicleCreateModel>;
