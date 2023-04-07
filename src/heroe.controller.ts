import { Request, Response } from "express";
import { heroeRepository } from "./heroe.entity";

export const getAll = async (req: Request, res: Response) => {
	try {
		const result = await heroeRepository.find();
		if (!result.length) {
			return res.status(404).json({
				message: "No se han encontrado registros",
			});
		}
		res.status(200).json({
			message: "Registros obtenidos exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener los registros",
			error,
		});
	}
};

export const newHeroe = async (req: Request, res: Response) => {
	try {
		const result = await heroeRepository.create(req.body);
		res.status(201).json({
			message: "Registro creado exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al crear el registro",
			error,
		});
	}
};

export const getHeroe = async (req: Request, res: Response) => {
	try {
		const result = await heroeRepository.findById(req.params.id);
		if (!result) {
			return res.status(404).json({
				message: "El registro solicitado no ha sido encontrado",
				result,
			});
		}
		res.status(200).json({
			message: "Registro obtenido exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al obtener el registro",
			error,
		});
	}
};

export const updateHeroe = async (req: Request, res: Response) => {
	try {
		const result = await heroeRepository.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		res.status(200).json({
			message: "Registro actualizado exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al actualizar el registro",
			error,
		});
	}
};

export const removeHeroe = async (req: Request, res: Response) => {
	try {
		const result = await heroeRepository.findByIdAndDelete(req.params.id);
		res.status(200).json({
			message: "Registro eliminado exitosamente",
			result,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error al eliminar el registro",
			error,
		});
	}
};
