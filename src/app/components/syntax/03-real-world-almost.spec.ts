import { Vehicle } from './vehicles';

describe('A fake but realistic ise of typescript and types', () => {
  it('A vehicle type', () => {
    const myCar: Vehicle = {
      vin: '9999',
      make: 'Ford',
      model: 'Bronco',
      year: 2021,
    };
  });
});
