import express from "express";
import { endpointsSociedades } from "./api/sociedades.js";

const app = express();
const port = 8000;

app.use(express.json());

// app.use("/api/v1/pokemons", endpointsPokemons);
// app.use("/api/v1/tipos", endpointsTipos);

app.use("/api/v1/sociedades", endpointsSociedades);

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`CivilizationAPI listening on port ${port}`);
});
