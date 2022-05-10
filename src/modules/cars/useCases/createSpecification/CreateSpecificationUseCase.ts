import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByname(
      name
    );

    if (specificationAlreadyExists) {
      throw new AppError("Specification already existis");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
