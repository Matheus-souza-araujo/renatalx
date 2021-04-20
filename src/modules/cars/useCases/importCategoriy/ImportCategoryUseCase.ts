import csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
  // pega o nosso arquivos passado pelo multer
  execute(file: Express.Multer.File): void {
    // Faz a leitura pegando pelo caminho do arquivo, criando uma stream que lê por partes, ajudando na performance
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    // o pipe repassa o pedaço lido e passa para o nosso parseFile
    stream.pipe(parseFile);

    // recebe nossas linhas que ele está lendo
    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
