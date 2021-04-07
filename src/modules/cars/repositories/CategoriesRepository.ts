import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

// DTO => Data transfer object

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]; // Só quem terá acesso a esse categories é o nosso repositório, por isso ele é private

  constructor() {
    // iniciando nosso category
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    // definindo que nossa função é um void, significa que não terá retorno nenhum
    const category = new Category(); // dessa forma conseguimos chamar nosso construtor

    // Object.assign(destino, ...origens)
    // O destino: objeto destino.
    // origens: Um ou mais objetos de origem.
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((Category) => Category.name === name);
    return category;
  }
}

export { CategoriesRepository };
