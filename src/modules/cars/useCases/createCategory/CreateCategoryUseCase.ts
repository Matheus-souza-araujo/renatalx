import { AppError } from "@errors/AppError";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
}
/**
 * [X] - Definir o tipo de retorno
 * [X] - Alterar o retorno de erro
 * [X] - Acessar o repósitorio
 * [X] - Retornar algo
 */
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already existis"); // Forma de informar nosso erro sem enviar uma response
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
