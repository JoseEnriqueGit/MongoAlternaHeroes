import { Router } from "express";
import {
	newHeroe,
	removeHeroe,
	getAll,
	getHeroe,
	updateHeroe,
} from "./heroe.controller";

export const heroeRoutes = Router();

heroeRoutes.get("/", getAll);
heroeRoutes.post("/", newHeroe);
heroeRoutes.get("/:id", getHeroe);
heroeRoutes.put("/:id", updateHeroe);
heroeRoutes.delete("/:id", removeHeroe);
