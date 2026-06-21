import { Router } from "express";
import { getAllTipos } from "../db/_tipos.js";

export const endpointsTipos = Router();

endpointsTipos.get("/", async (req, res) => {
  const tipos = await getAllTipos();
  res.json(tipos);
});
