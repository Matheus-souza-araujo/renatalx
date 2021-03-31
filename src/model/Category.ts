import { v4 as uuidV4 } from "uuid";

class Category {
  id?: string; // O ponto de interrogação diz que nosso id é opcional
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    // Esse construtor está sendo usado para criar nosso id
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
