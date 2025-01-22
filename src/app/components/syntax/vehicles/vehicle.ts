export type ApiVehicle = {
  vin: string;
  make: string;
  model: string;
  year: number;
};

export type Vehicle = Readonly<ApiVehicle>;
