import { v4 as uuidV4 } from "uuid";

class Specification {
  // Aqui criamos os atributos que nossa classe Category irá ter
  id?: string; // O ponto de interrogação diz que nosso id é opcional
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    // Esse construtor está sendo usado para criar nosso id
    if (!this.id) {
      // usamos o this.id, para referênciar o nosso id
      this.id = uuidV4();
    }
  }
}

export { Specification };
