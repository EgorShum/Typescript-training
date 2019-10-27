class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  // without public because it belongs to Parent
  constructor(public wheels: number, color: string) {
    super('red');
    super(color);
  }
  private drive(): void {
    console.log('wroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4, 'red');
// car.honk(); // mistake
car.startDrivingProcess();
