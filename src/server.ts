import express from "express"; // import em vez de require

import { categoriesRoutes } from "./routes/categories.routes"; // importando nossa rota para o server

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes); // colocando nossa rota em uso no servidor
// passando o /categories não será mais necessário passar o path nos routes

app.listen(3333, () => {
  console.log("Server is Running!");
});
