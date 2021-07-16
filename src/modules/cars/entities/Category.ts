import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("categories") // define que essa nossa classe é uma entidade
class Category {
  // Aqui criamos os atributos que nossa classe Category irá ter
  @PrimaryColumn()
  id?: string; // O ponto de interrogação diz que nosso id é opcional
  @Column()
  name: string;
  @Column()
  description: string;
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    // Esse construtor está sendo usado para criar nosso id
    if (!this.id) {
      // usamos o this.id, para referênciar o nosso id
      this.id = uuidV4();
    }
  }
}

export { Category };
