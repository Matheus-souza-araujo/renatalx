import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes); // colocando nossa rota em uso no servidor
// passando o /categories não será mais necessário passar o path nos routes
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);

export { router };
