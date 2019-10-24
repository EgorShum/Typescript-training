const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi = ['brown', true, 40];
const pepsi2: [string, boolean, number] = ['brown', true, 40];

// Type aliase
type Drink = [string, boolean, number];

const pepsi3: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 35];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];
