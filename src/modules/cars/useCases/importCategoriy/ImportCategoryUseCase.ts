import csvParse from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  // pega o nosso arquivos passado pelo multer
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      // Faz a leitura pegando pelo caminho do arquivo, criando uma stream que lê por partes, ajudando na performance
      const stream = fs.createReadStream(file.path); // permiti lermos nosso arquivo em partes
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      // o pipe repassa o pedaço lido e passa para o nosso parseFile
      stream.pipe(parseFile);

      // recebe nossas linhas que ele está lendo
      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path); // para remover o arquivo
          resolve(categories); // nossa promisse que espera terminar para carregar os categories
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
