import express from "express"; // import em vez de require

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log("Server is Running!");
});
