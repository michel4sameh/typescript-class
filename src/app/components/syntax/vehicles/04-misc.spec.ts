describe('Unknown vs Any', () => {
  it('using any is bad', () => {
    type Meal = {
      kind: string;
      shell: string;
    };
    const jeffsMeal = {
      kind: 'Tacos',
      shell: 'Hard',
    };
    //placeMealOrder(jeffsMeal);
    let age;
    age = 12;
    expect(typeof age).toBe('number');
    age = 'Old';
    //function placeMealOrder(meal) {}
  });
});
