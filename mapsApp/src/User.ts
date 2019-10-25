import faker from 'faker';
import { Mappable } from './CustomMap';

// it tells to TS 'we want to make sure that the instance of this class sutisfies all the properties required by the Mappable interface'
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
