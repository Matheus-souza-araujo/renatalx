import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  async create({
    name,
    description,
    brand,
    daily_rate,
    fine_amount,
    license_plate,
  }: ICreateCarDTO): Promise<void> {
    const cars = new Car();

    Object.assign(cars, {
      name,
      description,
      brand,
      daily_rate,
      fine_amount,
      license_plate,
    });

    this.cars.push(cars);
  }
}
