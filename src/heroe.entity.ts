import { Schema, model } from "mongoose";

const HeroeSchema = new Schema({
	nombre: { type: String, require: true },
	alte: { type: String, require: true, unique: true },
});

export const heroeRepository = model("Heroe", HeroeSchema);
